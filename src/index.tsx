import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import App from './components/App/App';
import 'antd/dist/antd.css';
import './common/assets/styles.less';
import { history } from './core/history/history';

const entryPoint = document.getElementById(`app`);

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  entryPoint
);
