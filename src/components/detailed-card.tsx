import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { AppRoutesPath } from '../router/types';

const { Meta } = Card;

interface DetailedCardProps {
  author: string;
  date: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const DetailedCard = (props: DetailedCardProps) => {
  const { author, date, title, description, image, slug } = props;
  const formattedDate = new Date(date).toLocaleString();
  const peaceOfDescription = description?.slice(0, 420) + '...';

  return (
    <Card
      style={{
        marginBottom: '20px',
      }}
      actions={[
        <Link
          to={`${AppRoutesPath.PARAGRAPH_DETAILS.replace('/:id', '/')}${slug}`}
        >
          <div key="readmore">Read more...</div>
        </Link>,
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
