import React, {useCallback, useRef} from 'react'
import Private from 'Layouts/Private'
import {FiUsers} from 'react-icons/fi'
import {useQuery} from 'react-apollo'
import {queryCustomer} from 'Types'
import {LIST_CUSTOMERS} from './querys'
import CustomersTable from './components/CustomersTable'
import {Button} from 'antd'
import MdCustomers, {ModalHandles} from './components/MdCustomers'

export default function Customers(): JSX.Element {
    const {loading, data} = useQuery<queryCustomer>(LIST_CUSTOMERS)

    const mdCustomers = useRef<ModalHandles>(null)

    const AddButton: React.FC = () => {
        const openModalFx = useCallback(() => {
            mdCustomers.current?.openModal()
        }, [])

        return (
            <Button className="btn-success" onClick={openModalFx}>
                Novo Cliente
            </Button>
        )
    }

    return (
        <Private
            icon={FiUsers}
            title="Gerenciar Clientes"
            empty={loading}
            tools={<AddButton />}>
            <MdCustomers ref={mdCustomers} />

            {!!data && <CustomersTable customers={data.customers} />}
        </Private>
    )
}
