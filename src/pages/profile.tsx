import withAuth from '../components/withAuth';

import { ProtectedPage } from '../models';

const Profile: ProtectedPage = ({ session }) => {
  return <div>I am protected</div>;
};

export default withAuth(Profile);
