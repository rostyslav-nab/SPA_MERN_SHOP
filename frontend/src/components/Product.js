import React from "react"
import {Card} from "antd"
import {Rate} from 'antd'
import {Link} from "react-router-dom"

export const Product = (props) => {
    const {_id, image, name, rating, price, numReviews} = props.product
    return (
        <Link to={`/product/${_id}`}>
            <Card title={name}
                  cover={<img alt="card" src={image}/>}
                  style={{width: '300px', marginBottom: '10px'}}
                  hoverable>
                <h3>$ {price}</h3>
                <Rate disabled allowHalf defaultValue={rating}/> <span>{numReviews} reviews</span>
            </Card>
        </Link>
    )
}