import {gql} from 'apollo-boost'

export const CREATE_CUSTOMER = gql`
    mutation CreateCustomer(
        $bairro: String
        $cep: String
        $complemento: String
        $cpf: String
        $email: String
        $localidade: String
        $logradouro: String
        $nome: String
        $numero: String
        $referencia: String
        $telefone: String
        $celular: String
        $uf: String
    ) {
        createCustomer(
            data: {
                bairro: $bairro
                cep: $cep
                complemento: $complemento
                cpf: $cpf
                email: $email
                localidade: $localidade
                logradouro: $logradouro
                nome: $nome
                numero: $numero
                referencia: $referencia
                telefone: $telefone
                celular: $celular
                uf: $uf
            }
        ) {
            id
        }
    }
`

export const LIST_CUSTOMERS = gql`
    query {
        customers {
            id
            nome
            cpf
            telefone
            celular
            bairro
            logradouro
            referencia
            numero
        }
    }
`
