import React, { Component } from 'react';
import { Menu } from 'antd';
import { MainMenuState, MainMenuItem } from './MainMenu.interface';

class MainMenu extends Component<{}, MainMenuState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selected: MainMenuItem.MAIN
    };
  }

  render() {
    const { selected } = this.state;

    return (
      <>
        <Menu
          style={{ padding: '0 100px' }}
          theme="dark"
          mode="horizontal"
          onClick={({ key }) => this.setState({ selected: key as MainMenuItem })}
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
