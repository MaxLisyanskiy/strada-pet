import { Layout, Spin } from 'antd';
import { articlesAPI } from '../services/articles-api';
import AppPagination from '../components/pagination';
import DetailedCard from '../components/detailed-card';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);
  if (isLoading)
    return (
      <h1 style={{ textAlign: 'center', color: '#474A51' }}>
        <Spin size="large" />
      </h1>
    );
  return (
    <>
      <Layout
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        {isSuccess &&
          data.articles.map((article) => (
            <DetailedCard
              author={article.author.username}
              date={article.createdAt}
              title={article.title}
              description={article.body}
              likes={article.favoritesCount}
              image={article.author.image}
            />
          ))}

        <AppPagination />
      </Layout>
    </>
  );
};

export default MainPage;
