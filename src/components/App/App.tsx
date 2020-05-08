/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { FunctionComponent } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { AppRoute } from '@constants';

import { Layout, Typography } from 'antd';
import MainMenu from '../Header/MainMenu/MainMenu';
import Users from '../Users/Users';
import Posts from '../Posts/Posts';
import MainPage from '../MainPage/MainPage';

const { Header, Footer, Content } = Layout;

const App: FunctionComponent = () => {
  const { Title } = Typography;

  return (
    <Layout className="layout">
      <Header className="header">
        <MainMenu />
      </Header>
      <Content style={{ padding: '0 100px' }}>
        <Switch>
          <Route exact path={AppRoute.MAIN} component={MainPage} />
          <Route exact path={AppRoute.USERS} component={Users} />
          <Route
            exact
            path={`${AppRoute.USERS}/:id`}
            render={({ match }) => <Redirect to={`${AppRoute.USERS}/${match.params.id}${AppRoute.POSTS}`} />}
          />
          <Route exact path={`${AppRoute.USERS}/:id${AppRoute.POSTS}`} component={Posts} />

          <Route render={() => <Title level={2}>Page not found</Title>} />
        </Switch>
      </Content>
      <Footer className="footer">Тестовое задание выполнил Дмитрий Щукин</Footer>
    </Layout>
  );
};

export default App;
