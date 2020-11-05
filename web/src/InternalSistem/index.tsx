import React, { ReactNode, useState } from 'react'
import { IconType } from 'react-icons/lib/esm'
import Head from 'next/head'

import { Layout, Menu } from 'antd'
import MapedMenu from './maped-menu'
import styled from 'styled-components'

type ComponentProps = {
    title: string
    icon?: IconType
    children: ReactNode
}

const CntTitlePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1.5em;

    svg {
        width: 28px;
        height: 28px;
    }

    h2 {
        margin: 0;
    }
`

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
                    <CntTitlePage>
                        {PageIcon && (
                            <PageIcon className="mr-3" color="#245db1" />
                        )}
                        <h2>{title}</h2>
                    </CntTitlePage>
                </Layout.Header>
                <Layout.Content style={{ margin: '0 16px', paddingTop: '2em' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb> */}

                    {children}
                </Layout.Content>
            </Layout>
        </Layout>
    )
}
