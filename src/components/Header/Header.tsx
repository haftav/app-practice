import * as React from 'react';
import { signOut } from 'next-auth/react';

import Button from '../Button';

const Logo = () => <div>Logo</div>;

const Logout = () => (
  <Button variant="primary" onClick={() => signOut()}>
    Log Out
  </Button>
);

interface HeaderProps {}

const Header = () => {
  return (
    <div className="h-16 px-8 border-b border-b-white flex justify-between items-center">
      <Logo />
      <Logout />
    </div>
  );
};

export default Header;
