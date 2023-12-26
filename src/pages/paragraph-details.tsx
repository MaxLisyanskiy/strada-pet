import { useEffect } from 'react';
import { Avatar, Layout, Skeleton, Space, Typography } from 'antd';
import { InfoCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import updateMetaData from '../utils/create-meta';
import { gerCurrentPost } from '../services/articles-api';
import { AppRoutesPath } from '../router/types';
import Tag from '../components/tag';
import { getCommentaries } from '../services/comments-api';
import CommentList from '../components/comment-list';

const { Title, Paragraph } = Typography;

const ParagraphDetails: React.FC = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const backgroundColor = userTheme ? '#141414' : '#D8D8D8';
  const textColor = '#fff';
  const dispatch = useAppDispatch();

  updateMetaData({ title: 'Details | News App', description: 'Details page' });

  const { id } = useParams<{ id: string }>() || { id: '' };
  const { data, isLoading } = gerCurrentPost.useGetCurrentPostQuery(id || '');

  const { data: commentariesData } = getCommentaries.useGetAllCommentariesQuery(
    id ?? ''
  );

  useEffect(() => {
    dispatch(
      setCurrentPath([
        {
          title: (
            <>
              <HomeOutlined />
              <Link to={AppRoutesPath.MAIN}>Home</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <InfoCircleOutlined />
              <Link
                to={`${AppRoutesPath.PARAGRAPH_DETAILS.replace(
                  '/:id',
                  '/'
                )}${id}`}
              >
                Details
              </Link>
            </>
          ),
        },
      ])
    );
  }, [dispatch]); // eslint-disable-line

  return (
    <Layout
      style={{
        display: 'flex',
        width: '100%',
      }}
    >
      <Space
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <Layout
          style={{
            borderRadius: '35px',
            backgroundColor: backgroundColor,
            minWidth: '250px',
            padding: '30px',
            marginBottom: '10px',
          }}
        >
          {isLoading && <Skeleton active />}

          <Title level={2} style={{ color: textColor }}>
            {data?.article.title}
          </Title>

          <Space>
            <Avatar src={data?.article.author.image} />
            <Space
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Title level={5} style={{ color: textColor }}>
                {data?.article.author.username}
              </Title>
              <Paragraph style={{ color: textColor }}>
                {data?.article.createdAt && (
                  <Paragraph style={{ color: textColor }}>
                    {new Date(data.article.createdAt).toLocaleString()}
                  </Paragraph>
                )}
              </Paragraph>
            </Space>
          </Space>
        </Layout>

        <Paragraph
          style={{
            fontSize: '16px',
            padding: '0px 30px 0 30px',
          }}
        >
          {isLoading && <Skeleton.Input active />}
          {data?.article.body}
        </Paragraph>

        <Space style={{ padding: '0px 30px 0 30px' }}>
          <Tag />
        </Space>
      </Space>

      <Space
        style={{
          marginTop: '30px',
          width: '100%',
          borderTop: '1px solid #D8D8D8',
          padding: '0px 30px 0 30px',
          justifyContent: 'center',
        }}
      >
        {!userInfo ? (
          <Space
            style={{
              marginTop: '10px',
            }}
          >
            <Link to={AppRoutesPath.SIGN_IN}>Sign in</Link>
            <Typography>or</Typography>
            <Link to={AppRoutesPath.SIGN_UP}>sign up</Link>
            <Typography>to add comments on this</Typography>
            article
          </Space>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <CommentList comments={commentariesData?.comments} />
          </div>
        )}
      </Space>
    </Layout>
  );
};

export default ParagraphDetails;
