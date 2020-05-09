/* eslint-disable no-underscore-dangle */
import { observable, action, computed } from 'mobx';
import { notification } from 'antd';
import { getUsers, getUser } from './api-users';
import { ApiUser, StoredUsers } from './users.interface';
import { DEFAULT_USER_PER_PAGE, DEFAULT_USER_PAGE } from './users.constants';

class UsersStore {
  @observable storedUsers: StoredUsers = {};

  @observable isLoading = false;

  @observable viewedPage = 1;

  @observable selectedUserId = '';

  @observable paginationResponse = {
    currentPage: DEFAULT_USER_PAGE,
    perPage: DEFAULT_USER_PER_PAGE,
    pageCount: 0,
    totalCount: 0
  };

  @action
  loadUsers(nextPage?: number) {
    this.isLoading = true;
    const page = nextPage || this.viewedPage;

    if (Object.keys(this.storedUsers).includes(String(page))) {
      this.paginationResponse = { ...this.paginationResponse, currentPage: page };
      this.viewedPage = page;
      this.isLoading = false;
      return;
    }

    getUsers({
      page
    })
      .then(response => {
        this.selectUser('');

        if (response.data.result && response.data.result.length) {
          const meta = response.data._meta;
          if (meta) {
            this.paginationResponse = {
              currentPage: meta.currentPage || DEFAULT_USER_PAGE,
              perPage: meta.perPage || DEFAULT_USER_PER_PAGE,
              pageCount: meta.pageCount || 0,
              totalCount: meta.totalCount || 0
            };
          }
          this.storedUsers = { ...this.storedUsers, [page]: response.data.result };
          this.viewedPage = meta.currentPage;
          return;
        }

        notification.warn({
          message: 'System error',
          description: 'Data is unavailable. Please try again later'
        });
      })
      .catch(err => {
        notification.error({ message: err });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  @action
  loadUser(id: string) {
    this.isLoading = true;
    getUser(id)
      .then(response => {
        if (response.data.result) {
          const { result } = response.data;
          this.storedUsers = { ...this.storedUsers, [result.id]: result };
          return;
        }

        notification.warn({
          message: 'System error',
          description: 'Data is unavailable. Please try again later'
        });
      })
      .catch(err => {
        notification.error({ message: err });
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  @action
  setPage(page: number) {
    this.viewedPage = page;
  }

  @action
  selectUser(id: string) {
    this.selectedUserId = id;
  }

  @computed get selectedUser() {
    const storedUser = this.users.find(user => user.id === this.selectedUserId);
    return storedUser || null;
  }

  @computed get users(): ApiUser[] {
    return this.storedUsers[this.viewedPage] || [];
  }
}

const store = new UsersStore();
export default store;
