import React, { Component } from 'react';
import { Menu } from 'antd';
import { history, getMainPathName } from '@core/history/history';
import { AppRoute } from '@constants';
import { ClickParam } from 'antd/lib/menu';
import { MainMenuItem } from './MainMenu.constants';
import { MainMenuState } from './MainMenu.interface';
import { getSelectedMenuItem } from './MainMenu.utils';

class MainMenu extends Component<{}, MainMenuState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      selected: ''
    };

    this.setStateByLocation = this.setStateByLocation.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  componentDidMount() {
    this.setStateByLocation();
  }

  componentDidUpdate() {
    const { selected } = this.state;
    const { pathname } = history.location;

    const menuItemName = getSelectedMenuItem(pathname);
    selected !== menuItemName && this.setStateByLocation();
  }

  setStateByLocation() {
    const { pathname } = history.location;

    const mainPathName = getMainPathName(pathname);

    this.setState({
      selected: getSelectedMenuItem(mainPathName)
    });
  }

  handleMenuClick({ key }: ClickParam) {
    const { push } = history;

    this.setState(
      {
        selected: MainMenuItem[key as MainMenuItem]
      },
      () => push(AppRoute[key as MainMenuItem] || '')
    );
  }

  render() {
    const { selected } = this.state;

    return (
      <>
        <Menu
          style={{ padding: '0 100px' }}
          defaultSelectedKeys={['']}
          theme="dark"
          mode="horizontal"
          onClick={this.handleMenuClick}
          selectedKeys={[selected]}
        >
          <Menu.Item key={MainMenuItem.MAIN}>Main</Menu.Item>
          <Menu.Item key={MainMenuItem.USERS}>Users</Menu.Item>
        </Menu>
      </>
    );
  }
}

export default MainMenu;
