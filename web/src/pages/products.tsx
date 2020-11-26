import React, { useEffect, useState } from 'react'
import InternalSistem from 'src/layouts/InternalSistem'

import WooCommerce from 'src/services/WooCommerce'
const api = WooCommerce()

import { FaBoxes } from 'react-icons/fa'
import { Card, Col, Row } from 'antd'
import { Product, ProductsParams } from 'src/interfaces/woocommerce'

export default function Products() {
    const [list, setList] = useState<Product[]>([])

    useEffect(() => {
        ;(async () => {
            const product_list = await api.products()
            console.log(product_list)
            setList(product_list)
        })()
    }, [])

    return (
        <InternalSistem icon={FaBoxes} title="Produtos" empty={!list.length}>
            <Row gutter={16}>
                {list.map((item) => (
                    <Col span={6} key={item.id}>
                        <Card cover={<img src={item.images[0].src} />}>
                            <Card.Meta
                                title={item.name}
                                description={item.price}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        </InternalSistem>
    )
}
