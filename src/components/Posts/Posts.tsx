import React, { PureComponent } from 'react';
import { postsStore, usersStore } from '@stores';
import { observer } from 'mobx-react';
import { Typography } from 'antd';
import { Paper } from '@shared';
import Post from './Post/Post';
import { PostsProps } from './Posts.interface';

@observer
class Posts extends PureComponent<PostsProps, {}> {
  componentDidMount() {
    const { match } = this.props;
    const { params } = match;

    if (params.id) {
      postsStore.loadUserPosts(params.id);

      !usersStore.selectedUser && usersStore.loadUser(params.id);
    }
  }

  render() {
    const { posts } = postsStore;
    const { selectedUser } = usersStore;

    const { Title, Text } = Typography;

    return (
      <Paper>
        <Title level={2}>Posts </Title>
        {selectedUser && <Text> made by {`${selectedUser.first_name} ${selectedUser.last_name}`}</Text>}

        {posts && (
          <>
            {posts.map(post => (
              <Post key={post.id} data={post} />
            ))}
          </>
        )}
      </Paper>
    );
  }
}

export default Posts;
