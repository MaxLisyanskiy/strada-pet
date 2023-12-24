import React, { useEffect } from 'react';
import {
  Avatar,
  Button,
  Form,
  Input,
  Layout,
  Skeleton,
  Space,
  Typography,
} from 'antd';
import { InfoCircleOutlined, HomeOutlined } from '@ant-design/icons';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import updateMetaData from '../utils/create-meta';
import { gerCurrentPost } from '../services/articles-api';
import { AppRoutesPath } from '../router/types';
import Tag from '../components/tag';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ParagraphDetails: React.FC = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const backgroundColor = userTheme ? '#141414' : '#D8D8D8';
  const textColor = '#fff';
  const test = false;
  const dispatch = useAppDispatch();

  updateMetaData({ title: 'Details | News App', description: 'Details page' });

  const { id } = useParams<{ id: string }>() || { id: '' };
  const slug = id?.slice(3);
  const { data, isLoading } = gerCurrentPost.useGetCurrentPostQuery(slug || '');

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
              <Link to={AppRoutesPath.PARAGRAPH_DETAILS}>Details</Link>
            </>
          ),
        },
      ])
    );
  }, [dispatch]);

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto',
        width: '100vw',
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
            backgroundColor: backgroundColor,
            padding: '30px',
            marginBottom: '10px',
            width: '100vw',
          }}
        >
          {isLoading && <Skeleton active />}
          <Title level={2} style={{ color: textColor }}>
            {data?.article.slug}
          </Title>

          <Space>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
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
        {test ? (
          <Space style={{ marginTop: '10px' }}>
            <Link to={AppRoutesPath.SIGN_IN}>Sign in</Link>
            <Typography>or</Typography>
            <Link to={AppRoutesPath.SIGN_UP}>sign up</Link>
            <Typography>to add comments on this</Typography>
            article
          </Space>
        ) : (
          <Form
            size="large"
            style={{
              width: '500px',
              margin: '30px 0 30px 0',
            }}
          >
            <Form.Item>
              <TextArea rows={4}></TextArea>
            </Form.Item>
            <Space
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
              <Button type="primary">Post Comment</Button>
            </Space>
          </Form>
        )}
      </Space>
    </Layout>
  );
};

export default ParagraphDetails;
