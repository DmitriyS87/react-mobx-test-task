/* eslint-disable no-underscore-dangle */
import { observable, action, computed } from 'mobx';
import { getUsers, getUser } from './api-users';
import { ApiUser } from './users.interface';
import { DEFAULT_USER_PER_PAGE, DEFAULT_USER_PAGE } from './users.constants';

class UsersStore {
  @observable users: ApiUser[] = [];

  @observable isLoading = false;

  @observable page = 1;

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
    getUsers({
      page: nextPage || this.page
    })
      .then(response => {
        this.selectUser('');

        if (response.data.result && response.data.result.length) {
          this.users = response.data.result;
          const meta = response.data._meta;
          meta &&
            (this.paginationResponse = {
              currentPage: meta.currentPage || this.page,
              perPage: meta.perPage || DEFAULT_USER_PER_PAGE,
              pageCount: meta.pageCount || 0,
              totalCount: meta.totalCount || 0
            });
          return;
        }

        throw new Error('System error. Data is unavailable');
      })
      .catch(err => {
        console.log(err);
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
          this.users = [...this.users, response.data.result];
          return;
        }

        throw new Error('System error. Data is unavailable');
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  @action
  setPage(page: number) {
    this.page = page;
  }

  @action
  selectUser(id: string) {
    this.selectedUserId = id;
  }

  @computed get selectedUser() {
    const storedUser = this.users.find(user => user.id === this.selectedUserId);
    return storedUser || null;
  }
}

const store = new UsersStore();
export default store;
