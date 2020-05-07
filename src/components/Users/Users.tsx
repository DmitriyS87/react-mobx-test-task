import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Avatar, Table } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { UserLink, ApiUser } from '@stores/users/users.interface';
import { usersStore } from '@stores';
import { UsersProps, UsersState, UserPagintaionConfig } from './Users.interface';
import TableHeader from './TableHeader/TableHeader';

@observer
class Users extends Component<UsersProps, UsersState> {
  constructor(props: UsersProps) {
    super(props);

    this.onSelectedRowChange = this.onSelectedRowChange.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  componentDidMount() {
    usersStore.loadUsers();
  }

  selectRow = (data: ApiUser) => {
    const { selectedUserId } = usersStore;
    if (selectedUserId === data.id) {
      usersStore.selectUser('');
    } else {
      usersStore.selectUser(data.id);
    }
  };

  onSelectedRowChange = (selectedRowKeys: React.ReactText[]) => {
    usersStore.selectUser(String(selectedRowKeys[0]));
  };

  render() {
    const { isLoading, users, paginationResponse, selectedUserId } = usersStore;

    const columns = [
      {
        title: 'Фото',
        dataIndex: '_links',
        key: '_links',
        render: (data: UserLink) => {
          const avatarUrl = data?.avatar?.href;
          if (avatarUrl) {
            return (
              <>
                <Avatar src={avatarUrl} icon={<UserOutlined />} />
              </>
            );
          }
          return (
            <>
              <Avatar icon={<UserOutlined />} />
            </>
          );
        }
      },
      {
        title: 'Имя',
        dataIndex: 'first_name',
        key: 'first_name'
      },
      {
        title: 'Фамилия',
        dataIndex: 'last_name',
        key: 'last_name'
      },
      {
        title: 'Пол',
        dataIndex: 'gender',
        key: 'gender'
      },
      {
        title: 'Почта',
        dataIndex: 'email',
        key: 'email'
      },
      {
        title: 'Телефон',
        dataIndex: 'phone',
        key: 'phone'
      },
      {
        title: 'Статус',
        dataIndex: 'status',
        key: 'status'
      }
    ];

    const paginationConfig: UserPagintaionConfig = {
      total: paginationResponse.totalCount,
      current: paginationResponse.currentPage,
      pageSize: paginationResponse.perPage,
      onChange: (nexPage: number) => usersStore.loadUsers(nexPage),
      hideOnSinglePage: true,
      showSizeChanger: false
    };

    return (
      <>
        <Table
          showHeader
          title={() => <TableHeader />}
          rowSelection={{ onChange: this.onSelectedRowChange, type: 'radio', selectedRowKeys: [selectedUserId] }}
          loading={isLoading}
          dataSource={users}
          columns={columns}
          rowKey="id"
          onRow={record => ({
            onClick: () => this.selectRow(record)
          })}
          pagination={paginationConfig}
        />
      </>
    );
  }
}

export default Users;
