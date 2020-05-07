import React, { FunctionComponent } from 'react';
import { Card, Typography } from 'antd';
import { PostProps } from './Post.interface';

const Post: FunctionComponent<PostProps> = ({ data }) => {
  const { title, body } = data;
  const { Text } = Typography;

  return (
    <Card className="post-card" title={title} bordered>
      <Text>{body}</Text>
    </Card>
  );
};

export default Post;
