import { Layout, Avatar, Typography, Button, Radio } from 'antd';
import { RadioChangeEvent } from 'antd';
import { useAppSelector } from '../../store/store-hooks';
import { SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import './profile.css';
import DetailedCardList from '../../components/detailed-card-list';

const Profile = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);
  const [selectedRadio, setSelectedRadio] = useState('my');
  const backgroundColor = userTheme ? '#141414' : '#474A51';
  const userCards = selectedRadio === 'my' ? ['123'] : [];

  function handleRadioChange(e: RadioChangeEvent) {
    setSelectedRadio(e.target.value);
  }

  return (
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
                <Avatar
                  className="user__content-avatar"
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel"
                />
              </div>

              <Typography className="user__content-name">username</Typography>
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
          <>
            <DetailedCardList />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Profile;
