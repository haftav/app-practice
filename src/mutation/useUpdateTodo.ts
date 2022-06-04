import { Todo } from '@prisma/client';
import axios, { Axios, AxiosError } from 'axios';
import { useQueryClient, useMutation, UseMutationOptions } from 'react-query';

import { todosKey } from '../query/useTodos';

import { ApiResponse } from '../models';

interface UpdatedTodo {
  id: number;
  name?: string;
  description?: string;
  completed?: boolean;
}

const updateTodo = ({ id, ...data }: UpdatedTodo) =>
  axios
    .put<ApiResponse<'todo', Todo>>(`/api/todo/${id}`, {
      ...data,
    })
    .then(({ data: responseData }) => responseData.data.todo);

export default function useUpdateTodo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onMutate: async ({ id, ...updatedTodo }: UpdatedTodo) => {
      await queryClient.cancelQueries([todosKey.all]);

      const previousTodos = queryClient.getQueryData<Todo[]>(todosKey.all);

      if (previousTodos) {
        queryClient.setQueryData<Todo[]>(
          todosKey.all,
          previousTodos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                ...updatedTodo,
              };
            }
            return todo;
          })
        );
      }

      return { previousTodos };
    },
    onError: (err, variables, context) => {
      if (context?.previousTodos) {
        queryClient.setQueryData<Todo[]>('todos', context.previousTodos);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries(todosKey.all);
    },
  });
}
