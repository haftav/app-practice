import Image from 'next/image';

import MainLayout from '../layouts/MainLayout';

import withAuth from '../components/withAuth';
import Todo from '../components/Todo';

import { ProtectedPage } from '../models';

import useTodos from '../query/useTodos';
import useUpdateTodo from '../mutation/useUpdateTodo';

const Todos = () => {
  const todos = useTodos();

  const updateTodo = useUpdateTodo();

  if (todos.data) {
    return todos.data.length ? (
      <>
        {todos.data.map((todo) => (
          <Todo
            todo={todo}
            toggle={(checked) => updateTodo.mutate({ completed: checked, id: todo.id })}
            key={todo.id}
          />
        ))}
      </>
    ) : (
      <div>No todos.</div>
    );
  }

  if (todos.error) {
    return <div>Error fetching todos.</div>;
  }

  return <div>Loading...</div>;
};

const Profile: ProtectedPage = ({ session }) => {
  return (
    <MainLayout>
      <div className="container m-auto px-12 md:px-24 lg:px-64 flex flex-col items-center">
        <p>Logged in as {session.user.username} </p>
        <Image
          className="rounded-full"
          src={session.user.image as string}
          alt={session.user.username as string}
          width={150}
          height={150}
        />
        <Todos />
      </div>
    </MainLayout>
  );
};

export default withAuth(Profile);
