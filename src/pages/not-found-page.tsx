import { Result, Button } from 'antd';
import updateMetaData from '../utils/create-meta';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';

const NotFoundPage = () => {
  updateMetaData({ title: 'ERROR | News App', description: 'Error page' });
  return (
    <Result
      style={{
        fontSize: '40px',
      }}
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Link to={AppRoutesPath.MAIN}>
          <Button type="primary">Return Home</Button>
        </Link>
      }
    />
  );
};

export default NotFoundPage;
