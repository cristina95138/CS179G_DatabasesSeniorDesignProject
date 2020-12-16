import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="subscription">
      <a href="/subscription">Subscription</a>
    </Menu.Item>
      <Menu.Item key="channel">
        <a href="/channel">Channel</a>
      </Menu.Item>
      <Menu.Item key="search">
        <a href="/search">Search</a>
      </Menu.Item>
      <Menu.Item key="trendingvideos">
        <a href="/trendingvideos">Trending Videos</a>
      </Menu.Item>
      <Menu.Item key="trendingchannels">
        <a href="/trendingchannels">Trending Channels</a>
      </Menu.Item>
      <Menu.Item key="settings">
        <a href="/settings">Settings</a>
      </Menu.Item>
  </Menu>
  )
}

export default LeftMenu