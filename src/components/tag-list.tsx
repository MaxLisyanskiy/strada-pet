import { Typography, Layout, Skeleton } from 'antd';
import { useAppSelector } from '../store/store-hooks';
import { tagsAPI } from '../services/articles-api';
import AppTag from './tag';

const { Title } = Typography;

const TagList = () => {
  const { data, isLoading } = tagsAPI.useGetAllTagsQuery();

  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const backgroundColor = userTheme ? '#141414' : '#E6E6E6';
  return (
    <Layout
      style={{
        backgroundColor: backgroundColor,
        borderRadius: '10px',
        padding: '5px',
        height: '100%',
        width: '100%',
      }}
    >
      <Title level={5}>Tag List</Title>
      <Skeleton active loading={isLoading} />
      <AppTag tagsData={data} />
    </Layout>
  );
};

export default TagList;
