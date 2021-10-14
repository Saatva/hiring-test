import React from 'react';

import navbarItemsClasses from './NavbarItems.module.scss';

import NavbarItem from './NavbarItem/NavbarItem';
import Cart from '../../Cart/Cart';

const NavbarItems = (props) => {

    const clickHandler = (e) => {
        let msg = props.cartCount ? `You have ${props.cartCount} item(s) added to your cart. You're now being taken to checkout page!` :
            'Please add item(s) to your cart.'

        alert(msg);

        !props.cartCount && e.preventDefault();
    };

    return (
        <ul className={navbarItemsClasses.NavbarItems}>
            <NavbarItem link="/" clicked={clickHandler}>
                <Cart cartCount={props.cartCount} />
            </NavbarItem>
        </ul>
    );
};

export default NavbarItems;
