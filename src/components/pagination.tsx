import { Pagination } from 'antd';
import { CURRENT_PAGE, CURRENT_PAGE_SIZE } from '../shared/constants';

interface AppPaginationProps {
  page: number;
  pageSize: number;
  articlesCount: number | undefined;

  onChangeCurrentPage: (page: number) => void;
  onChangeCurrentPageSize: (pageSize: number) => void;
}

const AppPagination = (props: AppPaginationProps) => {
  const {
    page,
    pageSize,
    articlesCount = 100,

    onChangeCurrentPage,
    onChangeCurrentPageSize,
  } = props;

  return (
    <Pagination
      current={page}
      pageSize={pageSize}
      defaultCurrent={CURRENT_PAGE}
      total={articlesCount}
      defaultPageSize={CURRENT_PAGE_SIZE}
      onChange={(page) => onChangeCurrentPage(page)}
      onShowSizeChange={(_, size) => onChangeCurrentPageSize(size)}
    />
  );
};

export default AppPagination;
