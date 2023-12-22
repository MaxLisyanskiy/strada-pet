import { Skeleton } from 'antd';
import { uid } from 'uid';
import DetailedCard from './detailed-card';
import { articlesAPI } from '../services/articles-api';

const DetailedCardList = () => {
  const { data, isLoading } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  const GenerateSkeleton = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(<Skeleton key={uid()} />);
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
