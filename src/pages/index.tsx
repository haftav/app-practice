import Head from 'next/head';
import { signOut } from 'next-auth/react';

import withAuth from '../components/withAuth';
import { ProtectedPage } from '../models';
import MainLayout from '../layouts/MainLayout';

const Dashboard: ProtectedPage = ({ session }) => {
  return (
    <MainLayout>
      <Head>
        <title>App Practice</title>
        <meta
          name="description"
          content="Just some practice for making a next app with protected routes"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1>Hello World</h1>
        <div>
          <p>Logged in as {session.user.username} </p>
          <button onClick={() => signOut()}>Log Out</button>
        </div>
      </main>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
