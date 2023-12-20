import { Layout, Spin } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCardList from '../components/detailed-card-list';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);
  if (isLoading)
    return (
      <h1 style={{ textAlign: 'center', color: '#474A51' }}>
        <Spin size="large" />
      </h1>
    );
  return (
    <>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {isSuccess && <DetailedCardList isSuccess={isSuccess} data={data} />}
        <AppPagination />
      </Layout>
    </>
  );
};

export default MainPage;
