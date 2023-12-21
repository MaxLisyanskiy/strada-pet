import { Layout, Spin } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCardList from '../components/detailed-card-list';
import TagList from '../components/tag-list';

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
          padding: '10px',
          margin: '0 auto',
          width: '75%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <TagList/>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <DetailedCardList />
            <AppPagination />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
