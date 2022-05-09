import * as React from 'react';
import { useSession } from 'next-auth/react';
import type { Session } from 'next-auth';
import { useRouter } from 'next/router';

interface AuthProps {
  session: Session;
}

const withAuth = <T extends {}>(Component: React.ComponentType<T & AuthProps>) => {
  const WithAuth = (props: T) => {
    const router = useRouter();
    const { data: session, status } = useSession({
      required: true,
      onUnauthenticated() {
        router.push('/login');
      },
    });

    if (status === 'loading') {
      return null;
    }

    return <Component {...props} session={session} />;
  };

  return WithAuth;
};

export default withAuth;
