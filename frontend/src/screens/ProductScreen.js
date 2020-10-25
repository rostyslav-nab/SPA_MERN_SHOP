import React from "react"
import products from "../products"
import {Link} from "react-router-dom"
import {Button, Card, Col, Image, Rate, Row} from 'antd'

export const ProductScreen = ({match}) => {
    const product = products.find(p => p._id === match.params.id)
    return (
        <>
            <Link to='/'><Button type="danger">Go Back</Button></Link>
            <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}} justify='center'>
                <Col md={{span: 8}}>
                    <Image
                        src={product.image}
                    />
                </Col>
                <Col md={{span: 6}}>
                    <h2>{product.name}</h2>
                    <Rate disabled allowHalf defaultValue={product.rating}/> <span>{product.numReviews} reviews</span>
                    <h3>Price: $ {product.price}</h3>
                    <p>Description: {product.description}</p>
                </Col>
                <Col md={{span: 3}}>
                    <Card title="Summary" style={{ minWidth: 200 }}>
                        <p>Price: <strong>$ {product.price}</strong></p>
                        <p>Status: <strong>{product.countInStock > 1 ? 'In Stock' : 'Out of Stock'}</strong></p>
                        <Button disabled={product.countInStock === 0}>Add to Cart</Button>
                    </Card>
                </Col>
            </Row>
        </>
    )
}