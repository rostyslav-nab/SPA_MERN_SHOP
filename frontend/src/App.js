import React from 'react'
import './App.scss'
import {HeaderFC} from "./components/Header"
import {FooterFC} from "./components/Footer"
import {HomeScreen} from "./screens/HomeScreen"

// Ant Design
import {Layout} from 'antd'


const {Header, Footer, Content} = Layout

const App = () => {
    return (
        <div>
            <Layout>
                <Header>
                    <HeaderFC/>
                </Header>
                <Content>
                    <HomeScreen/>
                </Content>
                <Footer>
                    <FooterFC/>
                </Footer>
            </Layout>
        </div>
    )
}

export default App
