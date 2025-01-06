/* eslint-disable react-hooks/rules-of-hooks */
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  BaseQueryFn,
  createApi,
  fetchBaseQuery,
  retry,
} from "@reduxjs/toolkit/query/react";
import { API_URL } from "@env";
import { Mutex } from "async-mutex";
import { Tags } from "../utils/Tags";
import {
  createNavigationContainerRef,
  useNavigation,
} from "@react-navigation/native";
import { navigate } from "../navigation/navigationService";

const fetchIP = async () => {
  const apis = [
    "https://api.ipify.org/?format=json",
    "https://api.bigdatacloud.net/data/client-ip",
  ];
  for (const api of apis) {
    try {
      const response = await fetch(api);
      if (!response.ok) {
      }
      const data = await response.json();
      return data.ip || data.ipString || data.clientIp;
    } catch (error) {
      console.error(`Falha ao buscar  ${api}: ${error}`);
    }
  }
};

export const loginSlice = createApi({
  reducerPath: "api-login",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
    prepareHeaders: async (headers) => {
      const ip = await fetchIP();
      headers.set("x-forwarded-for", ip);
      return headers;
    },
  }),
  endpoints: () => ({}),
});

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,

  prepareHeaders: async (headers) => {
    const token = await AsyncStorage.getItem("@vencify:token");

    if (token) {
      const ip = await fetchIP();
      headers.set("x-forwarded-for", ip);
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});

const mutex = new Mutex();

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  if (args.url === "/auth/me" && result.error && result.error.status === 500) {
    AsyncStorage.clear();
    navigate("Login");
  }

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        const refreshToken = AsyncStorage.getItem("@azure:refresh_token");
        console.log(refreshToken);
        if (refreshToken) {
          const ip = await fetchIP();

          const refreshResponse = await fetch(`${API_URL}/auth/refresh`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${refreshToken}`,
              "x-forwarded-for": ip,
            },
          });
          if (refreshResponse.ok) {
            const refreshData = await refreshResponse.json();

            AsyncStorage.setItem("@azure:token", refreshData.access_token);
            AsyncStorage.setItem(
              "@azure:refresh_token",
              refreshData.refresh_token
            );

            result = await baseQuery(args, api, extraOptions);
          } else {
            api.dispatch({ type: "auth/logout" });
            // window.location.href = "/login";
            navigate("Login");
          }
        } else {
          api.dispatch({ type: "auth/logout" });
          navigate("Login");
          // window.location.href = "/login";
        }
      } catch (error) {
        console.error("Failed to refresh token", error);
        api.dispatch({ type: "auth/logout" });
        navigate("Login");
        // window.location.href = "/login";
      } finally {
        release();
      }
    } else {
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseQueryWithRetry = retry(baseQueryWithReauth, { maxRetries: 3 });

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: Object.values(Tags),
  baseQuery: baseQueryWithRetry,
  endpoints: () => ({}),
  keepUnusedDataFor: 300,
  refetchOnMountOrArgChange: false,
});
