import type { Session } from 'next-auth';
import type { NextPageContext, NextApiRequest, NextApiResponse } from 'next';

interface SessionProps {
  session: Session;
}

export type ProtectedPage<P = {}, IP = P> = React.ComponentType<P & SessionProps> & {
  getInitialProps?(context: NextPageContext): IP | Promise<IP>;
};

export interface RequestHandler {
  req: NextApiRequest;
  res: NextApiResponse;
  session: Session;
}
