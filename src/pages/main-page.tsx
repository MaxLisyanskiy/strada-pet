import { Layout } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCard from '../components/detailed-card';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);

  if (isLoading) return <h3>...Loading</h3>;

  return (
    <>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          margin: '0 auto',
          width: '75%',
        }}
      >
        <DetailedCard />
        <DetailedCard />
        <AppPagination />
      </Layout>
    </>
  );
};

export default MainPage;
