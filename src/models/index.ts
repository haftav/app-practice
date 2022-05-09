import type { Session } from 'next-auth';
import type { NextPageContext } from 'next';

interface SessionProps {
  session: Session;
}

export type ProtectedPage<P = {}, IP = P> = React.ComponentType<P & SessionProps> & {
  getInitialProps?(context: NextPageContext): IP | Promise<IP>;
};
