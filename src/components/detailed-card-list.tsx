import DetailedCard from './detailed-card';
import { articlesAPI } from '../services/articles-api';

const DetailedCardList = () => {
  const { data, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isSuccess);

  return data?.articles.map((article) => (
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
