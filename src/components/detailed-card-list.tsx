import { Skeleton, Result, Button } from 'antd';
import { uid } from 'uid';
import DetailedCard from './detailed-card';
import { IArticlesResponse } from '../types/articles-type';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface DetailedCardListProps {
  data: IArticlesResponse | undefined;
  isLoading: boolean;
  error?: Error | FetchBaseQueryError | SerializedError | undefined;
}

const DetailedCardList = (props: DetailedCardListProps) => {
  const { data, isLoading, error } = props;

  const GenerateSkeleton = () => {
    const array = [];
    for (let i = 0; i < 10; i++) {
      array.push(<Skeleton active key={uid()} />);
    }
    return array;
  };

  if (isLoading) {
    return (
      <div style={{ maxWidth: '1500px', margin: '0 auto', width: '100%' }}>
        {GenerateSkeleton()}
      </div>
    );
  }

  if (error) {
    return (
      <Result
        status="error"
        title="Error fetching cards"
        extra={
          <Button
            type="primary"
            key="back"
            onClick={() => window.location.reload()}
          >
            Try Again
          </Button>
        }
      />
    );
  }

  if (!data?.articles.length) {
    return (
      <Result
        status="404"
        title="No Data"
        subTitle="Unfortunately, no cards were found."
      />
    );
  }

  return (
    <>
      {data.articles.map((article) => (
        <DetailedCard
          key={uid()}
          author={article.author.username}
          date={article.createdAt}
          title={article.title}
          description={article.body}
          likes={article.favoritesCount}
          image={article.author.image}
          slug={article.slug}
        />
      ))}
    </>
  );
};

export default DetailedCardList;
