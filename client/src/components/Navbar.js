import React, { Component } from 'react';
import { Button, Sidebar, Responsive, Segment, Menu, Input, Icon, Header, Image } from 'semantic-ui-react'

import "../css/nav.css"

import axios from "axios"

class Navbar extends Component {

  state = {
    activeItem: 'campsites',
    visible: false
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state.activeItem;
    const { visible } = this.state.visible;

    return (
      <Segment.Group>
        <Responsive as={Segment} minWidth={768}>
          <Menu secondary>
            <img className="brand" src="logo.png"/>
            <Menu.Item name='campsites' active={activeItem === 'campsites'} onClick={this.handleItemClick} />
            <Menu.Item
              name='Places'
              active={activeItem === 'Places'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Map'
              active={activeItem === 'Map'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='Community'
              active={activeItem === 'Community'}
              onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
              <Menu.Item>
                <Input icon='search' placeholder='Search...' />
              </Menu.Item>
              <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>
          </Menu>
        </Responsive>
        <Responsive as={Segment} maxWidth={768}>
        <Menu secondary>
          <Menu.Item className="search">
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item position="right">
            <Button onClick={this.handleButtonClick}>Toggle visibility</Button>
          </Menu.Item>
        </Menu>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        </Responsive>
      </Segment.Group>
    );
  }
}

export default Navbar;
