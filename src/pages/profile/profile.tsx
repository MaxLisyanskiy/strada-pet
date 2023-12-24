import {
  Layout,
  Avatar,
  Typography,
  Button,
  Radio,
  RadioChangeEvent,
} from 'antd';
import { SettingOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store/store-hooks';
import DetailedCardList from '../../components/detailed-card-list';
import { articlesAPI } from '../../services/articles-api';
import NotAuthPage from '../../components/not-auth-page';
import { setCurrentPath } from '../../store/reducers/breadcrumbs/breadcrumb-slice';
import { AppRoutesPath } from '../../router/types';
import updateMetaData from '../../utils/create-meta';
import './profile.css';

const Profile = () => {
  const userTheme = useAppSelector((state) => state?.theme.userTheme);
  const username = useAppSelector((state) => state.auth.userInfo?.username);
  const userImage = useAppSelector((state) => state.auth.userInfo?.image);
  const [selectedRadio, setSelectedRadio] = useState('my');
  const backgroundColor = userTheme ? '#141414' : '#474A51';
  const userCards = selectedRadio === 'my' ? ['123'] : [];
  const { userInfo } = useAppSelector((state) => state.auth);
  const { data, isLoading, error } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
    tag: '',
  });

  function handleRadioChange(e: RadioChangeEvent) {
    setSelectedRadio(e.target.value);
  }

  const dispatch = useAppDispatch();
  updateMetaData({
    title: 'Profile | News App',
    description: 'Profile page',
  });

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
              <UserOutlined />
              <Link to={AppRoutesPath.PROFILE}>Profile</Link>
            </>
          ),
        },
      ])
    );
  }, []); // eslint-disable-line

  return (
    <>
      {!userInfo ? (
        <NotAuthPage />
      ) : (
        <Layout>
          <div
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <div>
              <div className="profile__container">
                <div className="user__content">
                  <div>
                    <Avatar className="user__content-avatar" src={userImage} />
                  </div>

                  <Typography className="user__content-name">
                    {username}
                  </Typography>
                </div>
                <div className="user__content-button">
                  <Link to={AppRoutesPath.SETTINGS}>
                    <Button style={{ margin: '10px 10px 0 0' }}>
                      <SettingOutlined /> Edit Profile Settings
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="articles__container">
            <div className="button__box">
              <Radio.Group
                value={selectedRadio}
                onChange={handleRadioChange}
                size="large"
              >
                <Radio.Button value="my">My Articles</Radio.Button>
                <Radio.Button value="favorite">Favorited Articles</Radio.Button>
              </Radio.Group>
            </div>
            {!userCards.length ? (
              <Typography>No articles are here ... yet.</Typography>
            ) : (
              <DetailedCardList
                data={data}
                isLoading={isLoading}
                error={error}
              />
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

export default Profile;
