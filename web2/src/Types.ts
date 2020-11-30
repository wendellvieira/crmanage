import {ReactNode} from 'react'
import {IconType} from 'react-icons/lib/esm'

export type ItemMenu = {
    text: string
    icon: IconType
    childrens?: Omit<ItemMenu, 'childrens'>[]
    to?: string
}

export type ComponentProps = {
    title: string
    icon?: IconType
    empty?: boolean
    children: ReactNode
}
