import { createBrowserHistory } from 'history';

const basename = process.env.NODE_ENV === 'production' ? process.env.SERVER_BASE_URL : '';

export const history = createBrowserHistory({ basename });

history.listen(() => window.scrollTo(0, 0));

export const getMainPathName = (path: string) => {
  // eslint-disable-next-line no-useless-escape
  const paths = path.match(/^[\/](\w+)?/);
  return paths ? paths[0] : path;
};
