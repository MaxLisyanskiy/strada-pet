import DetailedCard from './detailed-card';
import { articlesAPI } from '../services/articles-api';
import { Skeleton } from 'antd';

const DetailedCardList = () => {
  const { data, isLoading } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  if (!data)
    return (
      <div style={{ width: '1200px' }}>
        <Skeleton loading={isLoading} active />
        <Skeleton active />
        <Skeleton active />
        <Skeleton active />
      </div>
    );

  return data.articles.map((article) => (
    <DetailedCard
      author={article.author.username}
      date={article.createdAt}
      title={article.title}
      description={article.body}
      likes={article.favoritesCount}
      image={article.author.image}
    />
  ));
};

export default DetailedCardList;
