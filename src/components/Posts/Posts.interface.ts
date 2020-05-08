import { RouteComponentProps } from 'react-router';

interface PostsParams {
  id: string;
}

export type PostsProps = RouteComponentProps<PostsParams>;
