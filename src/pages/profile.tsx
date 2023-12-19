import { Input } from 'antd';
import ThemeSwitch from '../components/theme-switch';

const Profile = () => {
  return (
    <>
      <Input placeholder="Введите текст" />
      <ThemeSwitch />
    </>
  );
};

export default Profile;
