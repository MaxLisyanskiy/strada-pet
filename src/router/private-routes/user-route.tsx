import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store-hooks';
import { AppRoutesPath } from '../types';
import toast from 'react-hot-toast';

const ProtectedProfileAndSettingsRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  if (!userInfo) {
    setTimeout(() => {
      toast.error('User info not found');
    }, 150);

    return <Navigate to={AppRoutesPath.SIGN_IN} />;
  }

  return children;
};

export default ProtectedProfileAndSettingsRoute;
