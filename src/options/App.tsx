import { hot } from 'react-hot-loader/root';
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import './App.scss';
import { InfoCircleOutlined, MenuUnfoldOutlined, MenuFoldOutlined, ToolOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
const App = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className="app">
            <Sider trigger={undefined} collapsible collapsed={collapsed} theme="light" onCollapse={toggle}>
                <div className="logo" ><ToolOutlined/><span className="logo_content">控制台工具</span></div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<InfoCircleOutlined />}>
                        版本管理
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggle,
                    })}
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default hot(App);
