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
    toast.error('User info not found');

    return <Navigate to={AppRoutesPath.SIGN_IN} />;
  }

  return children;
};

export default ProtectedProfileAndSettingsRoute;
