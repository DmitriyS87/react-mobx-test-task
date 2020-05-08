import { AppRoute } from '@constants';
import { MainMenuItem } from './MainMenu.constants';

export const getSelectedMenuItem = (mainPathName: string) => {
  let selectedMenuItem = '';

  if (mainPathName === AppRoute.MAIN) {
    selectedMenuItem = MainMenuItem.MAIN;
  }

  if (mainPathName === AppRoute.USERS) {
    selectedMenuItem = MainMenuItem.USERS;
  }

  return selectedMenuItem;
};
