import { Layout } from 'antd';
import { useState } from 'react';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCardList from '../components/detailed-card-list';
import TagList from '../components/tag-list';
import { CURRENT_PAGE, CURRENT_PAGE_SIZE } from '../shared/constants';
import { useAppDispatch } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import updateMetaData from '../utils/create-meta';

const MainPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(CURRENT_PAGE);
  const [currentPageSize, setCurrentPageSize] =
    useState<number>(CURRENT_PAGE_SIZE);

  const dispatch = useAppDispatch();
  updateMetaData({ title: 'Home | News App', description: 'Main page' });

  const { data, isLoading } = articlesAPI.useGetAllArticlesQuery({
    limit: currentPageSize,
    offset: (currentPage - 1) * currentPageSize,
  });

  dispatch(setCurrentPath([{}]));

  return (
    <Layout
      style={{
        width: '80%',
        margin: '0 auto',
        padding: '50px 0',
      }}
    >
      <TagList />
      <DetailedCardList data={data} isLoading={isLoading} />
      <AppPagination
        page={currentPage}
        pageSize={currentPageSize}
        articlesCount={data?.articlesCount}
        onChangeCurrentPage={setCurrentPage}
        onChangeCurrentPageSize={setCurrentPageSize}
      />
    </Layout>
  );
};

export default MainPage;
