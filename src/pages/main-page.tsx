import { Layout } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCard from '../components/detailed-card';
import TagList from '../components/tag-list';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

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
        <div
          style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <TagList></TagList>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <DetailedCard />
            <DetailedCard />
            <DetailedCard />
            <DetailedCard />
            <DetailedCard />

            <AppPagination />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default MainPage;
