import React from 'react';

import navbarItemClasses from './NavbarItem.module.scss';

const NavbarItem = (props) => (
    <li className={navbarItemClasses.NavbarItem}>
        <a
            href={props.link}
            onClick={props.clicked}
            className={props.active ? navbarItemClasses.active : null}>{props.children}</a>
    </li>
);

export default NavbarItem;
