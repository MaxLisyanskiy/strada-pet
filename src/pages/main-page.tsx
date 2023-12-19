import { Layout } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppHeader from '../components/header';
import SignUp from './sign-up';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);

  return (
    <Layout>
      <AppHeader></AppHeader>
      <h1>Main Page</h1>
      <SignUp></SignUp>
    </Layout>
  );
};

export default MainPage;
