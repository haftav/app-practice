import { BsMoonStars } from 'react-icons/bs';

import useTheme from '../../hooks/useTheme';

interface ToggleThemeProps {}

const ToggleTheme = () => {
  const [theme, toggle] = useTheme();

  console.log(theme);
  return (
    <button onClick={toggle}>
      <BsMoonStars />
    </button>
  );
};

export default ToggleTheme;
