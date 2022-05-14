import type { NextPage } from 'next';

import LoginBox from '../components/LoginBox';

const Login: NextPage = () => {
  return (
    <div className="container h-screen m-auto pt-24 px-12">
      <LoginBox />
    </div>
  );
};

export default Login;
