import React from "react"
import {Menu} from "antd"
import {Link} from 'react-router-dom'

export const HeaderFC = () => {
    return (
        <>
            <Menu theme="dark" mode="horizontal" style={{float: 'right'}}>
                <Menu.Item key="1"><Link to='/login'><i className='fas fa-shopping-cart'/> Sign In</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/cart'><i className='fas fa-user'/> Cart</Link></Menu.Item>
            </Menu>
        </>
    )
}