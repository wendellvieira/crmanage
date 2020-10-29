import React from 'react'
import InternalSistem from 'layouts/InternalSistem'
import { FiUserPlus } from 'react-icons/fi'

export default function NewCustomers() {
    return (
        <InternalSistem icon={FiUserPlus} title="Cadastrar usuário">
            new customer
        </InternalSistem>
    )
}
