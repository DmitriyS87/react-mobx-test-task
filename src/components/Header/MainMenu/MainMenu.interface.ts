export enum MainMenuItem {
  MAIN = 'main',
  USERS = 'users'
}

export interface MainMenuState {
  selected: MainMenuItem;
}
