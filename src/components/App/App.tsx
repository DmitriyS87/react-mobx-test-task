/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { Route, Switch } from 'react-router';
import { MAIN_ROUTE, USERS_ROUTE } from '@constants/routes';

import { Layout } from 'antd';
import MainMenu from '../Header/MainMenu/MainMenu';

const { Header, Footer, Content } = Layout;

const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Header>
        <MainMenu />
      </Header>
      <Content>
        <Switch>
          <Route
            exact
            path={MAIN_ROUTE}
            render={() => (
              <>
                <p>Главная страница</p>
              </>
            )}
          />
          <Route
            exact
            path={USERS_ROUTE}
            render={() => (
              <>
                <p>Страница пользователей</p>
              </>
            )}
          />
          {/* <Route exact path={`${USERS_ROUTE}:id`} component={} /> */}
        </Switch>
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
};

export default App;
