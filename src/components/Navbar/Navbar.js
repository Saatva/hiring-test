import React from 'react';

import navbarClasses from './Navbar.module.scss';

import PanelToggle from './SidePanel/PanelToggle/PanelToggle';
import Logo from '../Logo/Logo';
import NavbarItems from './NavbarItems/NavbarItems';

const Navbar = (props) => (
    <header className={navbarClasses.Navbar}>
        <div className={navbarClasses.Cart}>
            <Logo />
        </div>

        <PanelToggle
            clicked={props.panelToggleClicked}
            sidePanelOpen={props.sidePanelOpen}/>

        <nav className={navbarClasses.DesktopOnly}>
            <NavbarItems cartCount={props.cartCount} />
        </nav>
    </header>
);

export default Navbar;
