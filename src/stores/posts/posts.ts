/* eslint-disable no-underscore-dangle */
import { observable, action } from 'mobx';
import { notification } from 'antd';
import { getUserPosts } from './api-posts';
import { PostResult } from './posts.interface';
import { DEFAULT_POSTS_PAGE, DEFAULT_POSTS_PER_PAGE } from './posts.constants';

class PostsStore {
  @observable posts: PostResult[] = [];

  @observable isLoading = false;

  @observable selectedPost = '';

  @observable paginationResponse = {
    currentPage: DEFAULT_POSTS_PAGE,
    perPage: DEFAULT_POSTS_PER_PAGE,
    pageCount: 0,
    totalCount: 0
  };

  @action
  loadUserPosts(userId: string, nextPage?: number) {
    if (userId) {
      this.isLoading = true;
      getUserPosts({
        page: nextPage || 1,
        user_id: userId
      })
        .then(response => {
          this.selectPost('');

          if (response.data.result && response.data._meta) {
            this.posts = response.data.result;
            const meta = response.data._meta;
            meta &&
              (this.paginationResponse = {
                currentPage: meta.currentPage || 1,
                perPage: meta.perPage || DEFAULT_POSTS_PER_PAGE,
                pageCount: meta.pageCount || 0,
                totalCount: meta.totalCount || 0
              });
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
  }

  @action
  selectPost(id: string) {
    this.selectedPost = id;
  }
}

const store = new PostsStore();
export default store;
