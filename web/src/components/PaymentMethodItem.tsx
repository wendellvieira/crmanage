import React, { useState } from 'react'
import { Button, Col, Form, Input, InputNumber, Radio, Row } from 'antd'
import styled from 'styled-components'
import { VscTrash } from 'react-icons/vsc'
import PaymentMethod from 'src/interfaces/payment_method'

const CntPaymentMethodItem = styled.aside`
    width: 100%;
    background: #fff;
    border: 1px solid #cecece;
    border-radius: 3px;
    padding: 12px 12px 4px 12px;

    .ant-form-item {
        margin: 0;
    }
    .ant-input-number {
        width: 100%;
    }
    .ant-radio-group {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .ant-radio-button-wrapper {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`
type Props = {
    data: PaymentMethod
}
export default function PaymentMethodItem({ data }: Props) {
    const [updateFields, setUpdateFields] = useState<string[]>([])

    const changedValues = (newData: Partial<PaymentMethod>): void => {
        const updateInput = Object.keys(newData)[0] as keyof PaymentMethod

        if (data[updateInput] != newData[updateInput]) {
            console.log('add', updateInput)
        } else {
            console.log('remove', updateInput)
        }
    }

    return (
        <CntPaymentMethodItem>
            <Form initialValues={data} onValuesChange={changedValues}>
                <Row gutter={[16, 10]}>
                    <Col span={20}>
                        <Form.Item name="title">
                            <Input placeholder="Titulo" />
                        </Form.Item>
                    </Col>
                    <Col span={4}>
                        <Button
                            type="primary"
                            block
                            icon={<VscTrash />}
                            danger
                        />
                    </Col>
                </Row>
                <Row gutter={[16, 10]}>
                    <Col span={16}>
                        <Form.Item name="type">
                            <Radio.Group buttonStyle="solid">
                                <Radio.Button value={0}>A Vista</Radio.Button>
                                <Radio.Button value={1}>A Prazo</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item name="rate">
                            <InputNumber
                                placeholder="Taxa"
                                defaultValue={100}
                                min={0}
                                max={100}
                                formatter={(value) => `${value}%`}
                                parser={(value) => value!.replace('%', '')}
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </CntPaymentMethodItem>
    )
}
