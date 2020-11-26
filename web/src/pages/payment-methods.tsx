import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { GoCreditCard } from 'react-icons/go'

import PaymentMethodItem from 'src/components/PaymentMethodItem'
import InternalSistem from 'src/layouts/InternalSistem'
import { LIST_PAYMENT_METHODS } from 'src/graphql/payment-methods'
import PaymentMethod from 'src/interfaces/payment_method'
import { Col, Row } from 'antd'

export default function PaymentMethods() {
    type QueryResponse = {
        paymentMethods: PaymentMethod[]
    }
    const { loading, data } = useQuery<QueryResponse>(LIST_PAYMENT_METHODS)

    return (
        <InternalSistem
            icon={GoCreditCard}
            title="Formas de pagamento"
            empty={loading}>
            <Row gutter={[16, 16]}>
                {data?.paymentMethods.map((item, index) => (
                    <Col span={8} key={index}>
                        <PaymentMethodItem data={item} />
                    </Col>
                ))}
            </Row>
        </InternalSistem>
    )
}
