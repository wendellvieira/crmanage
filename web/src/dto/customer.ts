import Customer from 'src/interfaces/customer'
import Yup, { errorTransform } from 'src/utils/yup'

export default {
    bairro: '',
    cep: '',
    complemento: '',
    cpf: '',
    email: '',
    localidade: '',
    logradouro: '',
    nome: '',
    numero: '',
    referencia: '',
    telefone: '',
    celular: '',
    uf: '',
} as Customer

export const resetAddress: Partial<Customer> = {
    bairro: '',
    complemento: '',
    localidade: '',
    logradouro: '',
    numero: '',
    referencia: '',
}

const schema = Yup.object<Customer>().shape({
    nome: Yup.string().required('Entre com o campo nome'),
    email: Yup.string().email('Email inválido!'),

    // eslint-disable-next-line
    // @ts-ignore
    cpf: Yup.string().cpfOrCnpj('Documento inválido'),

    bairro: Yup.string(),
    cep: Yup.string(),
    complemento: Yup.string(),
    localidade: Yup.string(),
    logradouro: Yup.string(),
    numero: Yup.string(),
    referencia: Yup.string(),
    telefone: Yup.string(),
    celular: Yup.string(),
    uf: Yup.string().max(2, 'Informe a abreviação do estado Ex: RJ'),
})

type validateCustomer = Yup.InferType<typeof schema>

export const validate = (data: Customer) =>
    errorTransform<validateCustomer, Customer>(schema, data)
