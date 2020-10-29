import React, { ReactNode, useState } from 'react'
import { IconType } from 'react-icons/lib/esm'
import Head from 'next/head'

import { Layout, Menu, Breadcrumb } from 'antd'
import MapedMenu from './maped-menu'

type ComponentProps = {
    title: string
    icon?: IconType
    children: ReactNode
}

export default function InternalSistem({
    children,
    title,
    icon: PageIcon,
}: ComponentProps) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Head>
                <title>{title}</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <Layout.Sider
                collapsible
                collapsed={collapsed}
                onCollapse={() => setCollapsed(!collapsed)}>
                <Layout.Header style={{ padding: 0 }} />

                <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                    {MapedMenu.map((Item, index) => (
                        <Menu.Item
                            key={index}
                            icon={<Item.icon className="menu-icon" />}>
                            {Item.text}
                        </Menu.Item>
                    ))}
                </Menu>
            </Layout.Sider>

            <Layout className="site-layout">
                <Layout.Header className="bg-white" style={{ padding: 0 }}>
                    <div className="cnt-page-title">
                        {PageIcon && <PageIcon className="mr-4" />}
                        <h2 className="ml-4">{title}</h2>
                    </div>
                </Layout.Header>
                <Layout.Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>

                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
}
