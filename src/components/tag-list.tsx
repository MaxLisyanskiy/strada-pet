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
        maxWidth: '720px',
        width: '100%',
        margin: '0 auto',
        marginBottom: '30px',
      }}
    >
      <Title style={{ textAlign: 'center' }} level={5}>
        Tag List
      </Title>

      {isLoading && <Skeleton.Input active size="small" block />}

      <AppTag tagsData={data} />
    </Layout>
  );
};

export default TagList;
