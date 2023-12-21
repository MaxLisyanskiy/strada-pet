import { Layout } from 'antd';

import AppPagination from '../components/pagination';
import DetailedCardList from '../components/detailed-card-list';
import TagList from '../components/tag-list';

const MainPage = () => {
  return (
    <Layout style={{ width: '80%', margin: '0 auto', padding: '50px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginRight: '30px',
          }}
        >
          <DetailedCardList />
          <AppPagination />
        </div>
        <div style={{ height: '180px', minWidth: '300px' }}>
          <TagList />
        </div>
      </div>
    </Layout>
  );
};

export default MainPage;
