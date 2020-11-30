import React from 'react'
import {Menu} from 'antd'
import MapedMenu from 'Configs/mapped-menu'
import {Link, useLocation} from 'react-router-dom'
// useLocation

export default function MappedMenu(): JSX.Element {
    const {pathname} = useLocation()
    const indexOpened = MapedMenu.findIndex((el) => el?.to === pathname)
    return (
        <Menu
            theme="dark"
            defaultSelectedKeys={[String(indexOpened)]}
            mode="inline">
            {MapedMenu.map((Item, index) => {
                return !Item.to ? (
                    <Menu.Item key={index}>
                        <Item.icon className="menu-icon" />
                        {Item.text}
                    </Menu.Item>
                ) : (
                    <Menu.Item key={index}>
                        <Link to={Item.to}>
                            <Item.icon className="menu-icon" />
                            {Item.text}
                        </Link>
                    </Menu.Item>
                )
            })}
        </Menu>
    )
}
