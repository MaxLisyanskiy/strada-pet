import {
  Layout,
  Avatar,
  Typography,
  Button,
  Radio,
  RadioChangeEvent,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useAppSelector } from '../../store/store-hooks';
import DetailedCardList from '../../components/detailed-card-list';
import { articlesAPI } from '../../services/articles-api';
import NotAuthPage from '../../components/not-auth-page';
import './profile.css';

const Profile = () => {
  const userTheme = useAppSelector((state) => state?.theme.userTheme);
  const username = useAppSelector((state) => state.auth.userInfo?.username);
  const userImage = useAppSelector((state) => state.auth.userInfo?.image);
  const [selectedRadio, setSelectedRadio] = useState('my');
  const backgroundColor = userTheme ? '#141414' : '#474A51';
  const userCards = selectedRadio === 'my' ? ['123'] : [];
  const isSuccess = useAppSelector((state) => state.auth.success);
  const { data, isLoading } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  function handleRadioChange(e: RadioChangeEvent) {
    setSelectedRadio(e.target.value);
  }

  return (
    <>
      {!isSuccess ? (
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
                  <Button>
                    <SettingOutlined /> Edit Profile Settings
                  </Button>
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
              <DetailedCardList data={data} isLoading={isLoading} />
            )}
          </div>
        </Layout>
      )}
    </>
  );
};

export default Profile;
