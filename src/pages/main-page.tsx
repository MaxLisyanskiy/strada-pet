import { articlesAPI } from '../services/articles-api';

const MainPage = () => {
  const { data, isLoading, isSuccess } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  console.log(data, isLoading, isSuccess);

  return <h1>Main Page</h1>;
};

export default MainPage;
