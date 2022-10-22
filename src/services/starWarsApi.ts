import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const starWarsApi = createApi({
  reducerPath: "starWarsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getPeople: builder.query({
      query: () => '/people'
    }),
getSpecies: builder.query({
  query: () => '/species'

    }),
    getFilms: builder.query({
      query: () => '/films' }),
    getPlanets: builder.query({
      query: () => '/planets'}),
    getStarships: builder.query({
      query: () => '/starships'}),
      getVehicles: builder.query({
        query: () => '/vehicles'}),
    getSearch: builder.mutation({
      query: ({ query }) => {
        return {
          url: `people/?search=${query}`,
          method: "get",  
        };
      },
    }),
      updateChar: builder.mutation({
        query: ({ id }) => {
          return {
            url: `people/${id}/`,
            method: "get",  
          };
        },
    })

  })
});

export const { useGetPeopleQuery, 
  useUpdateCharMutation,
  useGetVehiclesQuery,
  useGetSpeciesQuery,
  useGetStarshipsQuery,
  useGetSearchMutation,
  useGetPlanetsQuery,
  useGetFilmsQuery,
} = starWarsApi;
