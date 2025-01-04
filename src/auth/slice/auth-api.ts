/* eslint-disable @typescript-eslint/no-explicit-any */
import { loginSlice } from "../../services/http";

export const authApi = loginSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials: { email: string; password: string }) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body: { email: string; userBoingEditedId: string }) => ({
        url: "/auth/forgot/password",
        method: "POST",
        body: body,
      }),
    }),
    recoveryPassword: builder.mutation({
      query: (body: { newPassword: string; accessToken: string }) => ({
        url: "/auth/recovery/password",
        method: "POST",
        body: body,
      }),
    }),
    codeCheck: builder.mutation({
      query: (body: { email: string; password: string; name: string }) => ({
        url: "/auth/code-check",
        method: "POST",
        body: body,
      }),
    }),
    verify: builder.mutation({
      query: (body: { email: string; token: string }) => ({
        url: "/auth/verify-code",
        method: "POST",
        body: body,
      }),
    }),
  }),

  overrideExisting: true,
});

export const {
  useLoginMutation,
  useCodeCheckMutation,
  useForgotPasswordMutation,
  useRecoveryPasswordMutation,
  useVerifyMutation,
} = authApi;
