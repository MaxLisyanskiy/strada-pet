import { Card, Avatar } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';

const { Meta } = Card;

interface DetailedCardProps {
  likes: number;
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const DetailedCard = (props: DetailedCardProps) => {
  const { likes, author, date, title, description, image, slug } = props;
  const formattedDate = new Date(date).toLocaleString();
  const peaceOfDescription = description?.slice(0, 420) + '...';
  const router = useNavigate();

  return (
    <Card
      style={{
        marginBottom: '20px',
      }}
      actions={[
        <div key="readmore">
          <div
            onClick={() => {
              router(`${AppRoutesPath.PARAGRAPH_DETAILS}${slug}`);
            }}
          >
            Read more...
          </div>
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
