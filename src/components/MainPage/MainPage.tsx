import React, { FunctionComponent } from 'react';
import { Typography } from 'antd';
import { Paper } from '@shared';
import { Link } from 'react-router-dom';
import { AppRoute } from '@constants';

const MainPage: FunctionComponent = () => {
  const { Title, Paragraph } = Typography;

  return (
    <Paper>
      <Title level={2}>Главная страница</Title>
      <Paragraph strong>
        Добро пожаловать на главную страницу. Вы можете посмотреть список пользователей на странице{' '}
        <Link to={AppRoute.USERS}>&quot;Users&quot;</Link>.
      </Paragraph>
    </Paper>
  );
};

export default MainPage;
