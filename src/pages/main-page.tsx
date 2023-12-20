import { Layout, Spin } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCardList from '../components/detailed-card-list';

const MainPage = () => {
  const { isLoading } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  if (isLoading) {
    return (
      <h1 style={{ textAlign: 'center', color: '#474A51' }}>
        <Spin size="large" />
      </h1>
    );
  }

  return (
    <>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <DetailedCardList />
        <AppPagination />
      </Layout>
    </>
  );
};

export default MainPage;
