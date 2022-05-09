import type { NextPage } from 'next';
import { signIn } from 'next-auth/react';

import LoginBox from '../components/LoginBox';

const Login: NextPage = () => {
  return (
    <div className="container h-screen">
      <LoginBox />
    </div>
  );
};

export default Login;
