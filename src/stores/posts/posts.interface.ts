import { ApiLink } from '../users/users.interface';

export declare class PostsStoreClass {
  posts: PostResult[];

  isLoading: false;

  selectedPost: string;

  paginationResponse: {
    currentPage: number;
    perPage: number;
    pageCount: number;
    totalCount: number;
  };

  loadUserPosts: (userId: string, nextPage?: number) => void;

  selectPost: (id: string) => void;
}

export interface PostLink {
  self: ApiLink;
  edit: ApiLink;
}

export interface PostResult {
  id: string;
  user_id: string;
  title: string;
  body: string;
  _links: PostLink;
}

export interface PostsMeta {
  success: boolean;
  code: number;
  message: string;
  totalCount: number;
  pageCount: number;
  currentPage: number;
  perPage: number;
  rateLimit: {
    limit: number;
    remaining: number;
    reset: number;
  };
}

export interface PostsResponseData {
  _meta: PostsMeta;
  result: PostResult[];
}
