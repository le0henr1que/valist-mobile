import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useQueryClient } from "@tanstack/react-query";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { RootStackParamList } from "../screens/HomeScreen";
import { apiSlice } from "../services/http";
import { useLoginMutation } from "./slice/auth-api";
import { clearToken, setToken } from "./slice/auth-slice";


export function useAuth() {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const queryClient = useQueryClient();

  const signIn = useCallback(
    async ({ email, password }: { email: string; password: string }) => {
      try {
        const response = await login({ email, password }).unwrap();
        const { accessToken, refreshToken } = response;
        await AsyncStorage.setItem("@vencify:token", accessToken);
        await AsyncStorage.setItem("@vencify:refresh_token", refreshToken);
        dispatch(setToken(accessToken));
      } catch (error) {
        console.error("Failed to login:", error);
        throw error;
      }
    },
    [dispatch, login]
  );

  const signOut = useCallback(async () => {
    try {
      await AsyncStorage.removeItem("@vencify:token");
      await AsyncStorage.removeItem("@vencify:refresh_token");
      dispatch(clearToken());
      dispatch(apiSlice.util.resetApiState());
      await queryClient.invalidateQueries();
      navigation.navigate("Login");
    } catch (error) {
      console.error("Logout error: ", error);
    }
  }, [dispatch, navigation, queryClient]);

  
  return {
    signIn,
    signOut,
    isLoading,
  };
}
