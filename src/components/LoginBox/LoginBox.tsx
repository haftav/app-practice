import { signIn } from 'next-auth/react';

import Button from '../Button';

const LoginBox = () => {
  return (
    <div className="h-auto w-full min-w-min max-w-sm m-auto rounded-md p-16">
      <h1 className="text-xl text-center mb-8">Sign in with Github</h1>
      <Button onClick={() => signIn('github', { callbackUrl: '/' })} className="w-full">
        Sign In
      </Button>
    </div>
  );
};

export default LoginBox;
