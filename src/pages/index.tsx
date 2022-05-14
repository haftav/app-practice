import Head from 'next/head';
import Image from 'next/image';

import { ProtectedPage } from '../models';
import MainLayout from '../layouts/MainLayout';
import withAuth from '../components/withAuth';

const Dashboard: ProtectedPage = ({ session }) => {
  return (
    <MainLayout>
      <main className="text-center">
        <h1>Hello World</h1>
        <div>
          <p>Logged in as {session.user.username} </p>
        </div>
      </main>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
