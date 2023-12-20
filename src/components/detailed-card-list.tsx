import DetailedCard from './detailed-card';
import { IArticlesResponse, IArticle } from '../types/articles-type';

interface DetailedCardListProps {
  isSuccess: boolean;
  data?: IArticlesResponse[];
}

const DetailedCardList = ({ isSuccess, data }: DetailedCardListProps) => {
  if (!isSuccess) {
    return <p>Что-то пошло не так при получении данных.</p>;
  }
  return data.articles.map((article: IArticle) => (
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
