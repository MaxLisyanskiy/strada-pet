import { Switch } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { toggleTheme } from '../store/reducers/theme-slice';

const ThemeSwitch = () => {
  const dispatch = useAppDispatch();
  const userTheme = useAppSelector((state) => state.theme.userTheme);

  const handleToggleTheme = () => {
    localStorage.setItem('theme', JSON.stringify(!userTheme));
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
