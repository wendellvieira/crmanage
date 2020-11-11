import React, { ReactNode, useState } from 'react'
import { IconType } from 'react-icons/lib/esm'
import Head from 'next/head'

import { Empty, Layout, Menu } from 'antd'
import MapedMenu from 'src/configs/maped-menu'
import { CntTitlePage, CntEmpty } from 'src/styles/layouts/internalSistem'

type ComponentProps = {
    title: string
    icon?: IconType
    empty?: boolean
    children: ReactNode
}

export default function InternalSistem({
    children,
    title,
    icon: PageIcon,
    empty,
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
                    {!!empty ? (
                        <CntEmpty>
                            <Empty description={false} />
                        </CntEmpty>
                    ) : (
                        children
                    )}
                </Layout.Content>
            </Layout>
        </Layout>
    )
}
