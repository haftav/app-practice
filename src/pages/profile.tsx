import Image from 'next/image';

import withAuth from '../components/withAuth';
import MainLayout from '../layouts/MainLayout';

import { ProtectedPage } from '../models';

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
      </div>
    </MainLayout>
  );
};

export default withAuth(Profile);
