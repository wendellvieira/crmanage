import React from 'react'
import Private from 'Layouts/Private'
import {FiUsers} from 'react-icons/fi'
import {useQuery} from 'react-apollo'
import {queryCustomer} from 'Types'
import {LIST_CUSTOMERS} from './querys'
import CustomersTable from './components/CustomersTable'

export default function Customers(): JSX.Element {
    const {loading, data} = useQuery<queryCustomer>(LIST_CUSTOMERS)
    return (
        <Private icon={FiUsers} title="Gerenciar Clientes" empty={loading}>
            {!!data && <CustomersTable customers={data.customers} />}
        </Private>
    )
}
