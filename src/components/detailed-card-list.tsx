import { Skeleton } from 'antd';
import { uid } from 'uid';
import DetailedCard from './detailed-card';
import { IArticlesResponse } from '../types/articles-type';

interface DetailedCardListProps {
  data: IArticlesResponse | undefined;
  isLoading: boolean;
}

const DetailedCardList = (props: DetailedCardListProps) => {
  const { data, isLoading } = props;

  const GenerateSkeleton = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(<Skeleton active key={uid()} />);
    }
    return array;
  };

  if (isLoading)
    return (
      <div style={{ width: '1500px', margin: '0 auto' }}>
        {GenerateSkeleton()}
      </div>
    );

  return (
    <>
      {data?.articles.map((article) => (
        <DetailedCard
          key={uid()}
          author={article.author.username}
          date={article.createdAt}
          title={article.title}
          description={article.body}
          likes={article.favoritesCount}
          image={article.author.image}
        />
      ))}
    </>
  );
};

export default DetailedCardList;
