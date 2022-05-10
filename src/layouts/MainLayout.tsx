import type { ReactNode } from 'react';

import Header, {
  HeaderLeft,
  Logo,
  Links,
  Logout,
  HeaderRight,
  HeaderCenter,
} from '../components/Header';
import ToggleTheme from '../components/ToggleTheme';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header>
        <HeaderLeft>
          <Logo />
          <Links />
        </HeaderLeft>
        <HeaderCenter>
          <ToggleTheme />
        </HeaderCenter>
        <HeaderRight>
          <Logout />
        </HeaderRight>
      </Header>
      {children}
    </div>
  );
};

export default MainLayout;
