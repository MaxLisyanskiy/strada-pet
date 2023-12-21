import { Card, Avatar } from 'antd';
import { HeartFilled } from '@ant-design/icons';
const { Meta } = Card;

const DetailedCard = () => {
  return (
    <Card
      style={{
        margin: '30px 0',
      }}
      actions={[
        <div key="readmore">Read more...</div>,
        <div>
          2295 <HeartFilled />
        </div>,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
        }
        title="UserName"
        description="12-12-2023"
        style={{
          display: 'flex',
          marginBottom: '20px',
          alignItems: 'center',
        }}
      />
      <Meta
        title="If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!"
        description="Quia quo iste et aperiam voluptas consectetur a omnis et.\nDolores et earum consequuntur sunt et.\nEa nulla ab voluptatem dicta vel. Temporibus aut adipisci magnam aliquam eveniet nihil laudantium reprehenderit sit.\nAspernatur cumque labore voluptates mollitia deleniti et"
      />
    </Card>
  );
};

export default DetailedCard;
