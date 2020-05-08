import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

history.listen(() => window.scrollTo(0, 0));

export const getMainPathName = () => {
  const { pathname } = history.location;

  // eslint-disable-next-line no-useless-escape
  const paths = pathname.match(/^[\/](\w+)?/);
  return paths ? paths[0] : pathname;
};
