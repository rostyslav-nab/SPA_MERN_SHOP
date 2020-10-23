import React from "react"
import {Card} from "antd"
import { Rate } from 'antd'

export const Product = (props) => {
    const {_id, image, name, rating, price} = props.product
    return (
        <Card title={name}
              extra={<a href={`/product/${_id}`}>More</a>}
              cover={<img alt="card" src={image} />}
              style={{width: '300px', marginBottom: '10px'}}
              hoverable>
            <p>Card content</p>
            <p>Card content</p>
            <h3>$ {price}</h3>
            <Rate disabled allowHalf defaultValue={rating} />
        </Card>
    )
}