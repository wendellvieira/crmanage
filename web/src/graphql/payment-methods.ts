import { gql } from 'apollo-boost'

export const LIST_PAYMENT_METHODS = gql`
    query {
        paymentMethods {
            id
            title
            type
            rate
        }
    }
`

export const CREATE_PAYMENT_METHOD = gql`
    mutation newPayMet($title: String!, $type: Float!, $rate: Float!) {
        createPaymentMethod(data: { title: $title, type: $type, rate: $rate }) {
            id
            title
            type
            rate
        }
    }
`
