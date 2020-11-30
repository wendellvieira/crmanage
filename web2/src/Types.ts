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

export type ChildNode = {
    children: ReactNode
}

export interface Customer {
    nome: string
    email: string
    cpf: string

    telefone: string
    celular: string

    bairro: string
    cep: string
    complemento: string
    localidade: string
    logradouro: string
    numero: string
    uf: string

    referencia: string
}

export type queryCustomer = {
    customers: Partial<Customer>[]
}
