import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    InfoCircleOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    ToolOutlined,
    LoadingOutlined,
} from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import { get } from 'lodash';

import { IProps } from './types';

const { Header, Sider, Content } = Layout;

const ConsoleLayout = ({ children }: IProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const defaultSelectedKey = get(location.pathname.split('/'), '[1]', 'versions');
    const toggle = () => {
        setCollapsed(!collapsed);
    };
    return (
        <Layout className="app">
            <Sider
                trigger={undefined}
                collapsible
                collapsed={collapsed}
                theme="light"
                onCollapse={toggle}
            >
                <div className="logo">
                    <ToolOutlined />
                    <span className="logo_content">控制台工具</span>
                </div>
                <Menu theme="light" mode="inline" defaultSelectedKeys={[defaultSelectedKey]}>
                    <Menu.Item key="versions" icon={<InfoCircleOutlined />}>
                        <Link to="/versions">版本管理</Link>
                    </Menu.Item>
                    <Menu.Item key="todo" icon={<LoadingOutlined />}>
                        <Link to="/todo">todo</Link>
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
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default ConsoleLayout;
