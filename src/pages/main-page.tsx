import { Layout } from 'antd';

import AppPagination from '../components/pagination';
import DetailedCardList from '../components/detailed-card-list';
import TagList from '../components/tag-list';

const MainPage = () => {
  return (
    <Layout
      style={{
        width: '80%',
        margin: '0 auto',
        padding: '50px 0',
      }}
    >
      <TagList />
      <DetailedCardList />
      <AppPagination />
    </Layout>
  );
};

export default MainPage;
