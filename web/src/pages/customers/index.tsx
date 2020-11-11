import React from 'react'

import InternalSistem from 'src/layouts/InternalSistem'
import Customer from 'src/interfaces/customer'

import { useQuery } from '@apollo/react-hooks'
import { LIST_CUSTOMERS } from 'src/graphql/customer'

import { Table } from 'antd'

import { FiUsers } from 'react-icons/fi'
import { ColumnsTableCustomers } from 'src/configs/ColumnsTableCustomers'

export default function Customers() {
    type queryCustomer = {
        customers: Partial<Customer>[]
    }
    const { loading, data } = useQuery<queryCustomer>(LIST_CUSTOMERS)

    return (
        <InternalSistem
            icon={FiUsers}
            title="Gerenciar Clientes"
            empty={loading}>
            <Table
                dataSource={data?.customers}
                columns={ColumnsTableCustomers}
            />
        </InternalSistem>
    )
}
