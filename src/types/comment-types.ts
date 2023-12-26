interface CommentAuthor {
  image: string;
  username: string;
}

export interface Comments {
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
  author: CommentAuthor;
}

export interface CommentInterface {
  comments: Comments[];
  author: CommentAuthor[];
  id: number;
  body: string;
  createdAt: string;
  updatedAt: string;
}
