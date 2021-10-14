import React from 'react';

import cartClasses from './Cart.module.scss';

import shoppingCartImg from '../../assets/icons/shopping-cart.svg';

const Cart = (props) => {

    return (
        <div className={cartClasses.Cart}>
            <img src={shoppingCartImg} alt="Shopping Cart"/>
            <span>{props.cartCount}</span>
        </div>
    );
};

export default Cart;
