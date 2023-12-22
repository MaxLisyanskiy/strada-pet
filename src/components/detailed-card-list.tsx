import { Skeleton } from 'antd';
import { uid } from 'uid';
import DetailedCard from './detailed-card';
import { articlesAPI } from '../services/articles-api';

const DetailedCardList = () => {
  const { data, isLoading } = articlesAPI.useGetAllArticlesQuery({
    limit: 10,
    offset: 0,
  });

  // return (
  //   <List
  //     itemLayout="vertical"
  //     size="large"
  //     dataSource={data ?? []}
  //     renderItem={(item) => (
  //       <List.Item
  //         key={item.title}
  //         actions={
  //           !loading
  //             ? [
  //                 <IconText
  //                   icon={StarOutlined}
  //                   text="156"
  //                   key="list-vertical-star-o"
  //                 />,
  //                 <IconText
  //                   icon={LikeOutlined}
  //                   text="156"
  //                   key="list-vertical-like-o"
  //                 />,
  //                 <IconText
  //                   icon={MessageOutlined}
  //                   text="2"
  //                   key="list-vertical-message"
  //                 />,
  //               ]
  //             : undefined
  //         }
  //         extra={
  //           !loading && (
  //             <img
  //               width={272}
  //               alt="logo"
  //               src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
  //             />
  //           )
  //         }
  //       >
  //         <Skeleton loading={loading} active avatar>
  //           <List.Item.Meta
  //             avatar={<Avatar src={item.avatar} />}
  //             title={<a href={item.href}>{item.title}</a>}
  //             description={item.description}
  //           />
  //           {item.content}
  //         </Skeleton>
  //       </List.Item>
  //     )}
  //   />
  // );

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

  return data?.articles.map((article) => (
    <DetailedCard
      key={uid()}
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
