import { useQuery } from 'react-query';
import axios from 'axios';
import { Todo } from '@prisma/client';

import { ApiResponse } from '../models';

export default function useTodos(options = {}) {
  return useQuery<Todo[], Error>(
    ['todos'],
    () => {
      return axios
        .get<ApiResponse<'todos', Todo[]>>('/api/todo')
        .then(({ data: responseData }) => responseData.data.todos);
    },
    options
  );
}
