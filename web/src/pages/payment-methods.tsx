import React from 'react'
import { GoCreditCard } from 'react-icons/go'
import PaymentMethodItem from 'src/components/PaymentMethodItem'
import InternalSistem from 'src/layouts/InternalSistem'

export default function PaymentMethods() {
    return (
        <InternalSistem icon={GoCreditCard} title="Formas de pagamento">
            <PaymentMethodItem />
        </InternalSistem>
    )
}
