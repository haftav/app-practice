import type { ReactNode } from 'react';

import Header from '../components/Header';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header>hi</Header>
      {children}
    </div>
  );
};

export default MainLayout;
