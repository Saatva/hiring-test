import React from 'react'
import Layout from './components/Layout'
import Main from './components/Main'

import { CartProvider } from "./context/CartContext";

import './scss/styles.scss'

const App = () => {
    return (
        <CartProvider>
            <Layout>
                <Main />
            </Layout>
        </CartProvider>
    )
}

export default App