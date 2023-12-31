import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../store/store-hooks';
import { AppRoutesPath } from '../types';
import toast from 'react-hot-toast';

const ProtectedSignUpAndSignInRoute = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  if (userInfo) {
    setTimeout(() => {
      toast.error('You are already logged in');
    }, 150);
    return <Navigate to={AppRoutesPath.PROFILE} />;
  }

  return children;
};

export default ProtectedSignUpAndSignInRoute;
