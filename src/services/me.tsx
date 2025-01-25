/* eslint-disable @typescript-eslint/no-explicit-any */
import { Tags } from "../utils/Tags";
import { apiSlice } from "./http";

interface IUserParams {
  search: string;
  orderBy: string;
  perPage: number;
  meta: {
    page: number;
  };
}

interface IUserUpdateParam {
  id: string;
  name: string;
  whatsapp_number: string;
  phone_number: string;
  version: number;
}

export const userInformations = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<any, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: [Tags.USER], // Corrigido para array
    }),
    updateUser: builder.mutation<any, any>({
      query: (params: IUserUpdateParam) => {
        console.log("Params being sent to API:", params); // Adicione este log para depuração
        return {
          url: `/user/${params?.id}`,
          method: "PUT",
          body: {
            name: params?.name,
            whatsapp_number: params?.whatsapp_number,
            phone_number: params?.phone_number,
            version: params?.version,
          },
        };
      },
      invalidatesTags: [Tags.USER], // Corrigido para fora do query
    }),
  }),
});

export const { useMeQuery, useUpdateUserMutation } = userInformations;
