import React from "react"
import {Col, Menu, Row} from "antd"
import {NavLink} from 'react-router-dom'
import classes from '../scss/Header.module.scss'

export const HeaderFC = () => {
    return (
        <>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><a href='/login'>Sign In</a></Menu.Item>
                <Menu.Item key="2">Cart</Menu.Item>
            </Menu>

        </>
    )
}