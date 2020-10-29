import React from 'react'
import InternalSistem from 'layouts/InternalSistem'
import { FiUserPlus } from 'react-icons/fi'
import MaskedInput from 'antd-mask-input'

import { Form, Input, Button } from 'antd'
import { Row, Col, Divider } from 'antd'
import styled from 'styled-components'

const CntForm = styled.div`
    width: 100%;
    max-width: 600px;
`

export default function NewCustomers() {
    const [form] = Form.useForm()

    const save = (value) => {
        console.log(value)
    }

    return (
        <InternalSistem icon={FiUserPlus} title="Cadastrar usuário">
            <CntForm>
                <Form form={form} layout="vertical" onFinish={save}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item name="nome" label="Nome completo">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="CPF" name="cpf">
                                <MaskedInput mask="111.111.111-11" />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Telefone" name="telefone">
                                <Input />
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
                                <MaskedInput mask="11111-111" />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row gutter={16}>
                        <Col span={18}>
                            <Form.Item label="Cidade" name="localidade">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label="Estado" name="uf">
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col span={10}>
                            <Form.Item label="Rua" name="logradouro">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={10}>
                            <Form.Item label="Bairro" name="bairro">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={4}>
                            <Form.Item label="Número" name="numero">
                                <Input />
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
