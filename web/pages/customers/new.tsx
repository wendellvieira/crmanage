import React, { ChangeEvent, RefObject, useRef, useState } from 'react'
import InternalSistem from 'layouts/InternalSistem'
import { FiUserPlus } from 'react-icons/fi'
import MaskedInput from 'antd-mask-input'

import { Form, Input, Button } from 'antd'
import { Row, Col, Divider } from 'antd'
import styled from 'styled-components'
import defaulCustomer, { resetAddress, validate } from 'dto/customer'
import Customer from 'interfaces/customer'
import { Errors, ValidationError } from 'utils/yup'

const CntForm = styled.div`
    width: 100%;
    max-width: 600px;
`

export default function NewCustomers() {
    const [form] = Form.useForm()
    const [erros, setErrors] = useState<Errors>({})
    const [disable, setDisable] = useState(true)
    const cidade = useRef() as RefObject<Input>
    const numero = useRef() as RefObject<Input>

    const save = async (value: Customer) => {
        try {
            setErrors({})
            await validate(value)
        } catch (err) {
            if (err instanceof ValidationError) err.setState(setErrors)
        }
    }

    const typingCep = async (ev: ChangeEvent<HTMLInputElement>) => {
        const { value } = ev.target
        const transformed_value = value.replace(/\-|\_/gi, '')

        if (transformed_value.length < 8) return false

        try {
            form.setFieldsValue(resetAddress)
            setDisable(true)
            const req = await fetch(
                `https://viacep.com.br/ws/${transformed_value}/json/`
            )
            const data = await req.json()
            if (data.erro) throw new Error()
            form.setFieldsValue(data)
            numero.current?.focus()
        } catch (error) {
            console.log(error)
            setDisable(false)
            cidade.current?.focus()
        }
    }

    return (
        <InternalSistem icon={FiUserPlus} title="Cadastrar usuário">
            <CntForm>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={save}
                    initialValues={defaulCustomer}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                name="nome"
                                label="Nome completo"
                                help={erros.nome}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="CPF" name="cpf">
                                <MaskedInput mask="111.111.111-11" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Telefone" name="telefone">
                                <MaskedInput mask="(11) 1111-1111" />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item label="Celular" name="celular">
                                <MaskedInput mask="(11) 11111-1111" />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item label="Email" name="email">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Divider orientation="left">Endereço</Divider>

                    <Row gutter={16}>
                        <Col span={8}>
                            <Form.Item label="CEP" name="cep">
                                <MaskedInput
                                    mask="11111-111"
                                    onChange={typingCep}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={18}>
                            <Form.Item label="Cidade" name="localidade">
                                <Input ref={cidade} disabled={disable} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Estado" name="uf">
                                <Input disabled={disable} />
                            </Form.Item>
                        </Col>

                        <Col span={10}>
                            <Form.Item label="Rua" name="logradouro">
                                <Input disabled={disable} />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item label="Bairro" name="bairro">
                                <Input disabled={disable} />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Número" name="numero">
                                <Input ref={numero} />
                            </Form.Item>
                        </Col>

                        <Col span={12}>
                            <Form.Item label="Complemento" name="complemento">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Referencia" name="referencia">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button htmlType="submit" type="primary">
                        Salvar
                    </Button>
                </Form>
            </CntForm>
        </InternalSistem>
    )
}
