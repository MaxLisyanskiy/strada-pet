export interface IArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string | null;
    image: string;
    following: boolean;
  };
}

export interface IArticlesResponse {
  articles: IArticle[];
  articlesCount: number;
}

interface Author {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

interface ParagraphDetails {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Author;
}

export interface ParagraphDetailsInterface {
  article: ParagraphDetails;
}
