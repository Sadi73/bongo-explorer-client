import React from 'react';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';

const items = [
  {
    key: '1',
    label: (
      <Link to="/">Home</Link>
    )
  },
  {
    key: '2',
    label: (
      <Link to="/package/all">Packages</Link>
    )
  },
  {
    key: '3',
    label: (
      <Link to="/story/all">Blogs</Link>
    )
  },
  {
    key: '4',
    label: (
      <a href="#contact-us-footer">Contact Us</a>
    )
  }

];


const MenuBar = () => (
  <Dropdown
    menu={{ items }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        <MenuUnfoldOutlined />
      </Space>
    </a>
  </Dropdown>
);
export default MenuBar;