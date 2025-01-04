import React, { useEffect, useState } from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PublicRoute from "./public";
import PrivateRoute from "./private";
import { setToken, clearToken } from "../auth/slice/auth-slice";

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "white",
  },
};

export default function RootNavigator() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state: any) => !!state.auth.token);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await AsyncStorage.getItem("@vencify:token");
        if (token) {
          dispatch(setToken(token));
        } else {
          dispatch(clearToken());
        }
      } catch (error) {
        console.error("Erro ao verificar o token:", error);
      } finally {
        setLoading(false);
      }
    };

    checkToken();
  }, [dispatch]);

  if (loading) {
    return null; // or a loading spinner
  }

  return (
    <NavigationContainer theme={MyTheme}>
      {isAuthenticated ? <PrivateRoute /> : <PublicRoute />}
    </NavigationContainer>
  );
}
