import { Avatar, Layout, Space, Typography, Form, Input, Button } from 'antd';
import { InfoCircleOutlined, HomeOutlined } from '@ant-design/icons';
import Tag from '../components/tag';
import { useAppSelector } from '../store/store-hooks';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/store-hooks';
import { setCurrentPath } from '../store/reducers/breadcrumbs/breadcrumb-slice';
import updateMetaData from '../utils/create-meta';

const { Title, Paragraph } = Typography;

const ParagraphDetails = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const backgroundColor = userTheme ? '#141414' : '#D8D8D8';
  const textColor = '#fff';
  const dispatch = useAppDispatch();
  updateMetaData({ title: 'Details | News App', description: 'Details page' });

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
  }, []);

  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: '0 auto',
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
            padding: '30px',
            marginBottom: '10px',
            margin: '0 auto',
          }}
        >
          <Title
            level={2}
            style={{
              color: textColor,
            }}
          >
            If we quantify the alarm, we can get to the FTP pixel through the
            online SSL interface!
          </Title>
          <Space>
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            <Space
              style={{
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <Title
                level={5}
                style={{
                  color: textColor,
                }}
              >
                Alexander Aipov
              </Title>
              <Paragraph
                style={{
                  color: textColor,
                }}
              >
                18-12-2023
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
          Quia quo iste et aperiam voluptas consectetur a omnis et.\nDolores et
          earum consequuntur sunt et.\nEa nulla ab voluptatem dicta vel.
          Temporibus aut adipisci magnam aliquam eveniet nihil laudantium
          reprehenderit sit.\nAspernatur cumque labore voluptates mollitia
          deleniti et. Quos pariatur tenetur.\nQuasi omnis eveniet eos maiores
          esse magni possimus blanditiis.\nQui incidunt sit quos consequatur aut
          qui et aperiam delectus.\nPraesentium quas culpa.\nEaque occaecati
          cumque incidunt et. Provident saepe omnis non molestiae natus
          et.\nAccusamus laudantium hic unde voluptate et sunt
          voluptatem.\nMollitia velit id eius mollitia occaecati repudiandae.
          Voluptatum tempora voluptas est odio iure odio dolorem.\nVoluptatum
          est deleniti explicabo explicabo harum provident quis molestiae. Sed
          dolores nostrum quis. Aut ipsa et qui vel similique sed hic
          a.\nVoluptates dolorem culpa nihil aut ipsam voluptatem. Cupiditate
          officia voluptatum.\nTenetur facere eum distinctio animi qui
          laboriosam.\nQuod sed voluptatem et cumque est eos.\nSint id provident
          suscipit harum odio et. Facere beatae delectus ut.\nPossimus voluptas
          perspiciatis voluptatem nihil sint praesentium.\nSint est nihil
          voluptates nesciunt voluptatibus temporibus blanditiis.\nOfficiis
          voluptatem earum sed. Deserunt ab porro similique est accusamus id
          enim aut suscipit.\nSoluta reprehenderit error nesciunt odit veniam
          sed.\nDolore optio qui aut ab.\nAut minima provident eius repudiandae
          a quibusdam in nisi quam.
        </Paragraph>
        <Space
          style={{
            padding: '0px 30px 0 30px',
          }}
        >
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
          <Form
            size="large"
            style={{
              margin: '30px 0 30px 0',
              width: '300px',
            }}
          >
            <Form.Item>
              <Input.TextArea rows={4} placeholder="Write your comment" />
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
