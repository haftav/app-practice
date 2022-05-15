import Image from 'next/image';

import withAuth from '../components/withAuth';
import MainLayout from '../layouts/MainLayout';

import { ProtectedPage } from '../models';

import useTodos from '../query/useTodos';

const Todos = () => {
  const todos = useTodos();

  if (todos.data) {
    return todos.data.length ? (
      <div>
        {todos.data.map((todo) => (
          <div key={todo.id}>
            <pre>{JSON.stringify(todo, null, 2)}</pre>
          </div>
        ))}
      </div>
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
      <div className="container m-auto flex flex-col items-center">
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
