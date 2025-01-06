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

export const userInformations = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<any, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
        providesTags: Tags.USER,
      }),
    }),
  }),
});

export const { useMeQuery } = userInformations;
