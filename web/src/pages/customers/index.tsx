import { Button, Empty, Table } from 'antd'
import React, { ReactElement } from 'react'
import { FiUsers } from 'react-icons/fi'
import InternalSistem from 'src/layouts/InternalSistem'
import styled from 'styled-components'
import { useQuery } from '@apollo/react-hooks'
import Customer from 'src/interfaces/customer'
import { LIST_CUSTOMERS } from 'src/graphql/customer'
import { ColumnType } from 'antd/lib/table'
import { BsPhone } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { VscEdit, VscTrash } from 'react-icons/vsc'

const CntEmpty = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
`
const CenterCell = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    span {
        margin-left: 5px;
    }
`
const CntItem = styled.div`
    display: block;

    i {
        display: block;
        opacity: 0.7;
    }
`
const CntActions = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    justify-content: flex-end;
`

const columns: ColumnType<Partial<Customer>>[] = [
    {
        title: 'Nome',
        key: 'nome',
        // eslint-disable-next-line react/display-name
        render: (t, item) => (
            <CntItem>
                {item.nome}
                <i>{item.cpf}</i>
            </CntItem>
        ),
    },
    {
        title: 'Contatos',
        key: 'phone',
        // eslint-disable-next-line react/display-name
        render: (t, item) => (
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
        // eslint-disable-next-line react/display-name
        render: (t, item) => (
            <CntItem>
                {item.logradouro}, {item.bairro}, Nº{item.numero}
                {!!item.referencia && <i>{item.referencia}</i>}
            </CntItem>
        ),
    },
    {
        title: 'Ações',
        key: 'actions',
        // eslint-disable-next-line react/display-name
        render: (t, item) => (
            <CntActions>
                <Button type="primary" ghost icon={<VscEdit />} />
                <Button danger icon={<VscTrash />} />
            </CntActions>
        ),
    },
]

export default function Customers() {
    type queryCustomer = {
        customers: Partial<Customer>[]
    }
    const { loading, data } = useQuery<queryCustomer>(LIST_CUSTOMERS)

    return (
        <InternalSistem icon={FiUsers} title="Gerenciar Clientes">
            {loading ? (
                <CntEmpty>
                    <Empty description={false} />
                </CntEmpty>
            ) : (
                <Table dataSource={data?.customers} columns={columns} />
            )}
        </InternalSistem>
    )
}
