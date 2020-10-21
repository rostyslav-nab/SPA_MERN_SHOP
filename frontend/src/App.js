import React from 'react'
import './App.css'
import {HeaderFC} from "./components/Header"
import {FooterFC} from "./components/Footer"


// Ant Design
import {Layout} from 'antd'

const {Header, Footer, Content} = Layout

const App = () => {
    return (
        <>
            <Layout>
                <Header>
                    <HeaderFC/>
                </Header>
                <Content>
                    Content
                </Content>
                <Footer>
                    <FooterFC/>
                </Footer>
            </Layout>
        </>
    );
}

export default App
