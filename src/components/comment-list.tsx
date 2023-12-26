import Comment from './comment';
import { Comments } from '../types/comment-types';
interface CommentListProps {
  comments: Comments[] | undefined;
}

const CommentList = (props: CommentListProps) => {
  const { comments } = props;

  return (
    <>{comments?.map((item) => <Comment key={item.id} comment={item} />)}</>
  );
};

export default CommentList;
