import React from 'react'

import {BsPhone} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import {VscEdit} from 'react-icons/vsc'

import {Table, Button} from 'antd'
import {ColumnType} from 'antd/lib/table'

import {CenterCell, CntItem, CntActions} from 'Modules/Customers/styles'

import {Customer, queryCustomer} from 'Types'
import TrashButton from './TrashButton'

const ColumnsTableCustomers: ColumnType<Partial<Customer>>[] = [
    {
        title: 'Nome',
        key: 'nome',
        render: (notUsed, item) => (
            <CntItem>
                {item.nome}
                <i>{item.cpf}</i>
            </CntItem>
        ),
    },
    {
        title: 'Contatos',
        key: 'phone',
        render: (notUsed, item) => (
            <>
                {!!item.celular && (
                    <CenterCell>
                        <BsPhone /> <span>{item.celular}</span>
                    </CenterCell>
                )}
                {!!item.telefone && (
                    <CenterCell>
                        <AiOutlinePhone /> <span>{item.telefone}</span>
                    </CenterCell>
                )}
            </>
        ),
    },
    {
        title: 'Endereço',
        key: 'address',
        render: (notUsed, item) => (
            <CntItem>
                {item.logradouro}, {item.bairro}, Nº{item.numero}
                {!!item.referencia && <i>{item.referencia}</i>}
            </CntItem>
        ),
    },
    {
        title: 'Ações',
        key: 'actions',
        render: (notUsed, item) => (
            <CntActions>
                <Button type="primary" ghost icon={<VscEdit />} />
                <TrashButton customerId={item.id} />
            </CntActions>
        ),
    },
]

export default function CustomersTable({
    customers,
}: queryCustomer): JSX.Element {
    const mapedCustomers = customers.map((item, key) => ({
        ...item,
        key: String(key),
    }))
    return <Table dataSource={mapedCustomers} columns={ColumnsTableCustomers} />
}
