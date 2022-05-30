import { Todo } from '@prisma/client';

import Checkbox from '../Checkbox';

interface TodoProps {
  todo: Todo;
}

const Todo = ({ todo }: TodoProps) => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-700 to-gray-800/90 p-4 pl-0 rounded-md flex">
      <div className="px-6 flex items-center justify-center">
        <Checkbox />
      </div>
      <div>
        <h3 className="text-lg">{todo.name}</h3>
        {todo.description && (
          <p className="text-md font-light italic text-gray-300/70">{todo.description}</p>
        )}
      </div>
    </div>
  );
};

export default Todo;
