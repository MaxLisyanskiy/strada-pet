import { Card, Avatar } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';

const { Meta } = Card;

interface DetailedCardProps {
  likes: number;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
}

const DetailedCard = ({
  likes,
  author,
  date,
  title,
  description,
  image,
}: DetailedCardProps) => {
  const formattedDate = new Date(date).toLocaleString();
  const peaceOfDescription = description?.slice(0, 420) + '...';

  return (
    <Card
      style={{
        marginBottom: '20px',
      }}
      actions={[
        <div key="readmore">
          <Link to={AppRoutesPath.PARAGRAPH_DETAILS}> Read more...</Link>
        </div>,
        <div>
          {likes} <HeartFilled />
        </div>,
      ]}
    >
      <Meta
        avatar={<Avatar src={image} />}
        title={author}
        description={formattedDate}
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      />
      <Meta title={title} description={peaceOfDescription} />
    </Card>
  );
};

export default DetailedCard;
