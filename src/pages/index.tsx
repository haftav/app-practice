import Head from 'next/head';
import Image from 'next/image';
import { signOut } from 'next-auth/react';

import { ProtectedPage } from '../models';
import MainLayout from '../layouts/MainLayout';
import withAuth from '../components/withAuth';
import Button from '../components/Button';

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
          <Image
            className="rounded-full"
            src={session.user.image as string}
            alt={session.user.username as string}
            width={150}
            height={150}
          />

          <Button variant="primary" onClick={() => signOut()}>
            Log Out
          </Button>
        </div>
      </main>
    </MainLayout>
  );
};

export default withAuth(Dashboard);
