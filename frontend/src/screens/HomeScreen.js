import React from "react"
import products from "../products"
import {Product} from "../components/Product"


import {Row, Col} from 'antd'


export const HomeScreen = () => {
    return (
        <>
            <h1>Products</h1>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify='center'>
                {products.map(product => (
                    <Col key={product._id}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </>
    )
}