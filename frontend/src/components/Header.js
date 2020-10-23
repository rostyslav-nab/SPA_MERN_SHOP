import React from "react"
import {Col, Menu, Row} from "antd"
import {NavLink} from 'react-router-dom'
import classes from '../scss/Header.module.scss'

export const HeaderFC = () => {
    return (
        <>
            <Menu theme="dark" mode="horizontal" style={{float: 'right'}}>
                <Menu.Item key="1"><a href='/login'><i className='fas fa-shopping-cart'/> Sign In</a></Menu.Item>
                <Menu.Item key="2"><a href='/cart'><i className='fas fa-user'/> Cart</a></Menu.Item>
            </Menu>

        </>
    )
}