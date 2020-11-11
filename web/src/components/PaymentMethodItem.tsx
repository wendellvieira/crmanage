import React from 'react'
import { Button, Col, Form, Input, Radio, Row } from 'antd'
import styled from 'styled-components'
import { VscTrash } from 'react-icons/vsc'

const CntPaymentMethodItem = styled.aside`
    width: 100%;
    background: #fff;
    border: 1px solid #cecece;
    border-radius: 3px;
    padding: 12px 12px 4px 12px;

    .ant-form-item {
        margin: 0;
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

export default function PaymentMethodItem() {
    return (
        <CntPaymentMethodItem>
            <Row gutter={[16, 10]}>
                <Col span={22}>
                    <Form.Item name="title">
                        <Input placeholder="Titulo" />
                    </Form.Item>
                </Col>
                <Col span={2}>
                    <Button type="primary" block icon={<VscTrash />} danger />
                </Col>
            </Row>
            <Row gutter={[16, 10]}>
                <Col span={24}>
                    <Form.Item name="paymentType">
                        <Radio.Group>
                            <Radio.Button value="0">A Vista</Radio.Button>
                            <Radio.Button value="1">A Prazo</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={[16, 10]}>
                <Col span={24}>
                    <Form.Item name="rate">
                        <Input placeholder="Taxa" />
                    </Form.Item>
                </Col>
            </Row>
        </CntPaymentMethodItem>
    )
}
