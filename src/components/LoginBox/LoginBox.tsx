import { signIn } from 'next-auth/react';

const LoginBox = () => {
  return (
    <div>
      <h1>Login or sign up</h1>
      <button onClick={() => signIn('github', { callbackUrl: '/' })}>Sign In</button>
    </div>
  );
};

export default LoginBox;
