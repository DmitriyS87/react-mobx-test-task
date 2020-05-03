import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App/App';

import 'antd/dist/antd.css';

const entryPoint = document.getElementById(`app`);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  entryPoint
);
