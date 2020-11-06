import React from 'react'

import { ColumnType } from 'antd/lib/table'
import Customer from 'src/interfaces/customer'

import { BsPhone } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'
import { VscEdit, VscTrash } from 'react-icons/vsc'

import { Button } from 'antd'

import { CenterCell, CntItem, CntActions } from 'src/styles/pages/customers'

export const ColumnsTableCustomers: ColumnType<Partial<Customer>>[] = [
    {
        title: 'Nome',
        key: 'nome',
        // eslint-disable-next-line react/display-name
        render: ({}, item) => (
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
        render: ({}, item) => (
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
        render: ({}, item) => (
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
        render: ({}, item) => (
            <CntActions>
                <Button type="primary" ghost icon={<VscEdit />} />
                <Button danger icon={<VscTrash />} />
            </CntActions>
        ),
    },
]
