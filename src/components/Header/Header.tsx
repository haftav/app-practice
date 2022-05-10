import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'next-auth/react';
import clsx from 'clsx';

import Button from '../Button';

export const Logo = () => <div className="text-3xl">Logo</div>;

interface LinkProps extends NextLinkProps {
  children: string;
}

const Link = ({ href, children }: LinkProps) => {
  const { pathname } = useRouter();

  return (
    <NextLink href={href}>
      <a className={clsx('first:ml-0 ml-5', pathname === href ? 'border-b border-gray-200' : '')}>
        {children}
      </a>
    </NextLink>
  );
};

export const Links = () => {
  return (
    <div className="ml-12 hidden sm:block">
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
    </div>
  );
};

export const Logout = () => (
  <Button variant="primary" className="hidden sm:block" onClick={() => signOut()}>
    Log Out
  </Button>
);

interface HeaderLeftProps {
  children: React.ReactNode;
}

export const HeaderLeft = ({ children }: HeaderLeftProps) => (
  <div className="flex items-center">{children}</div>
);

interface HeaderRightProps {
  children: React.ReactNode;
}

export const HeaderRight = ({ children }: HeaderRightProps) => (
  <div className="flex items-center">{children}</div>
);

interface HeaderCenterProps {
  children: React.ReactNode;
}

export const HeaderCenter = ({ children }: HeaderCenterProps) => (
  <div className="absolute left-1/2 -translate-x-1/2">{children}</div>
);

interface HeaderProps {
  children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <div className="h-16 px-8 flex justify-between items-center">{children}</div>;
};

export default Header;
