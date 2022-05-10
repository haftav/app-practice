import { BsMoon, BsSun } from 'react-icons/bs';

import useTheme from '../../hooks/useTheme';

interface ToggleThemeProps {}

const ToggleTheme = () => {
  const [theme, toggle] = useTheme();

  return (
    <button onClick={toggle}>
      {theme === 'light' ? <BsMoon size={20} /> : <BsSun size={20} />}
    </button>
  );
};

export default ToggleTheme;
