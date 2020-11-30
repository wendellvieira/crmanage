import React from 'react'
import Private from 'Layouts/Private'
import {FiUsers} from 'react-icons/fi'

export default function Customers(): JSX.Element {
    return (
        <Private icon={FiUsers} title="Gerenciar Clientes" empty={false}>
            Gerenciar Clientes
        </Private>
    )
}
