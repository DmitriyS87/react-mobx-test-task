import React, { Component } from 'react';
import { Menu } from 'antd';
import { MainMenuState, MainMenuItem } from './MainMenu.interface';

class MainMenu extends Component<{}, MainMenuState> {
  constructor(props) {
    super(props);
    this.state = {
      selected: MainMenuItem.MAIN
    };
  }

  handleClick = e => {
    this.setState({
      selected: e.key
    });
  };

  render() {
    const { selected } = this.state;

    return (
      <>
        <Menu theme="dark" mode="horizontal" onClick={this.handleClick} selectedKeys={[selected]}>
          <Menu.Item key={MainMenuItem.MAIN}>Main</Menu.Item>
          <Menu.Item key={MainMenuItem.USERS}>Users</Menu.Item>
        </Menu>
      </>
    );
  }
}

export default MainMenu;
