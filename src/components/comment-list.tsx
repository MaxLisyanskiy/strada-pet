import { Empty } from 'antd';
import Comment from './comment';
import { Comments } from '../types/comment-types';

interface CommentListProps {
  comments: Comments[] | undefined;
}

const CommentList: React.FC<CommentListProps> = (props) => {
  const { comments } = props;

  return (
    <>
      {comments?.length ? (
        comments.map((item) => <Comment key={item.id} comment={item} />)
      ) : (
        <Empty description="No commentaries here" />
      )}
    </>
  );
};

export default CommentList;
