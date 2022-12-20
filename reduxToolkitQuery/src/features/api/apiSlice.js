import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos",
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "/todos",
        method: "POST",
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation({
      query: (updatedTodo) => ({
        url: `/todos/${updatedTodo.id}`,
        method: "PATCH",
        body: updatedTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/todos/${todoId}`,
        method: "DELETE",
        body: todoId,
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = apiSlice;
