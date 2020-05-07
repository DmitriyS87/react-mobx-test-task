/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FunctionComponent } from 'react';
import { Route, Switch } from 'react-router';
import { AppRoute } from '@constants';

import { Layout } from 'antd';
import MainMenu from '../Header/MainMenu/MainMenu';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';

const { Header, Footer, Content } = Layout;

const App: FunctionComponent = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <MainMenu />
      </Header>
      <Content style={{ padding: '0 100px' }}>
        <Switch>
          <Route
            exact
            path={AppRoute.MAIN_ROUTE}
            render={() => (
              <>
                <p>Главная страница</p>
              </>
            )}
          />
          <Route exact path={AppRoute.USERS_ROUTE} component={Users} />
          <Route exact path={`${AppRoute.USERS_POSTS_ROUTE}/:id`} component={Posts} />
        </Switch>
      </Content>
      <Footer className="footer">Тестовое задание выполнил Дмитрий Щукин</Footer>
    </Layout>
  );
};

export default App;
