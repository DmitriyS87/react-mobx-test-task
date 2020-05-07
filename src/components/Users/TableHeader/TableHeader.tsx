import React, { FunctionComponent } from 'react';
import { Button, Typography } from 'antd';
import { useHistory } from 'react-router';
import { AppRoute } from '@constants';
import { usersStore } from '@stores';

const TableHeader: FunctionComponent = () => {
  const { Title } = Typography;
  const { push } = useHistory();
  const userId = usersStore.selectedUserId;

  return (
    <div className="main">
      <span>
        <Title>Users list:</Title>
      </span>
      <Button
        disabled={!userId}
        size="large"
        type="link"
        onClick={() => push(`${AppRoute.USERS_POSTS_ROUTE}/${userId}`)}
      >
        Show comments
      </Button>
    </div>
  );
};

export default TableHeader;
