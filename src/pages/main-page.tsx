import { Layout } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppHeader from '../components/header';
import SignUp from './sign-up';
import AppPagination from '../components/pagination';
import DetailedCard from '../components/detailed-card';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);

  return (
    <>
      <AppHeader></AppHeader>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
        }}
      >
        <h1>Main Page</h1>
        {/* <SignUp></SignUp> */}

        <DetailedCard />
        <DetailedCard />
        <DetailedCard />
        <DetailedCard />
        <DetailedCard />
        <DetailedCard />
        <DetailedCard />
        <DetailedCard />

        <AppPagination />
      </Layout>
    </>
  );
};

export default MainPage;
