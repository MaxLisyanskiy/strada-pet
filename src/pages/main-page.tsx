import { Layout } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCard from '../components/detailed-card';
import SettingsPage from './settings';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);

  return (
    <>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
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
