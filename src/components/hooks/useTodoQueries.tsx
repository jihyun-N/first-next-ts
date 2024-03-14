import { deleteTodo, toggleTodo } from "@/app/api/practice/route";
import { Todo } from "@/types";
import { useQueryClient, useQuery, useMutation } from "@tanstack/react-query";
import React from "react";

const useTodoQueries = () => {
  const queryClient = useQueryClient();

  const {
    data: dataTodo,
    isLoading,
    isError,
  } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:4000/todos`);
      const dataTodo = await response.json();
      return dataTodo;
    },
  });

  const useDeleteMutation = () => {
    const { mutate: deleteTodos } = useMutation({
      mutationFn: deleteTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      },
    });

    return deleteTodos;
  };

  const deleteTodos = useDeleteMutation();

  const useToggleMutation = () => {
    const { mutate: toggleTodos } = useMutation({
      mutationFn: toggleTodo,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["todos"],
        });
      },
    });
    return toggleTodos;
  };
  const toggleTodos = useToggleMutation();

  return { dataTodo, isLoading, isError, deleteTodos, toggleTodos };
};

export default useTodoQueries;
