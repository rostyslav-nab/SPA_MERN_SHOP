import React from 'react'
import {BrowserRouter, Route} from "react-router-dom"
import './App.scss'
import {HeaderFC} from "./components/Header"
import {FooterFC} from "./components/Footer"
import {HomeScreen} from "./screens/HomeScreen"
import {ProductScreen} from "./screens/ProductScreen"

// Ant Design
import {Layout} from 'antd'


const {Header, Footer, Content} = Layout

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header>
                    <HeaderFC/>
                </Header>
                <Content>
                    <Route path='/' exact component={HomeScreen}/>
                    <Route path='/product/:id' component={ProductScreen}/>
                </Content>
                <Footer>
                    <FooterFC/>
                </Footer>
            </Layout>
        </BrowserRouter>
    )
}

export default App
