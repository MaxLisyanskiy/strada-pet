import { Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/reducer';

const Profile = () => {
  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.posts.userTheme);

  return (
    <>
      <Input placeholder="Введите текст"></Input>
      <Button
        type="primary"
        onClick={() => {
          dispatch(toggleTheme(!userTheme));
        }}
      >
        Кнопка
      </Button>
    </>
  );
};

export default Profile;
