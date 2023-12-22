import { Breadcrumb } from 'antd';
import { useAppSelector } from '../store/store-hooks';

const BreadcrumbItem = () => {
  const currentPath = useAppSelector(
    (state) => state.breadcrumb.breadcrumbHistory
  );

  return (
    <Breadcrumb
      items={currentPath}
      style={{
        margin: '10px',
      }}
    />
  );
};

export default BreadcrumbItem;
