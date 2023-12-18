import { Switch } from 'antd';
import useAppDispatch from '../hooks/use-app-dispatch';
import { toggleTheme } from '../store/theme-slice';
import useAppSelector from '../hooks/use-app-selector';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const userTheme = useAppSelector((state) => state.theme.userTheme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme(!userTheme));
  };

  return (
    <Switch
      checkedChildren="🌙"
      unCheckedChildren="☀️"
      checked={userTheme}
      onChange={handleToggleTheme}
    />
  );
};

export default ThemeSwitch;
