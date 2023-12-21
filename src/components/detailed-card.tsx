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
  const peaceOfDescription = description.slice(0, 420) + '...';
  return (
    <Card
      style={{
        margin: '30px 0',
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
          marginBottom: '20px',
          alignItems: 'center',
        }}
      />
      <Meta title={title} description={peaceOfDescription} />
    </Card>
  );
};

export default DetailedCard;
