import React, { useState } from 'react';
import Aux from '../Auxx/Auxx';

import Navbar from '../../components/Navbar/Navbar';
import SidePanel from '../../components/Navbar/SidePanel/SidePanel';

import layoutClasses from './Layout.module.scss';

const Layout = (props) => {
    const [showSidePanel, setShowSidePanel] = useState(false);

    const sidePanelToggleHandler = () => {
        setShowSidePanel(!showSidePanel)
    }

    return (
        <Aux>
            <Navbar
                sidePanelOpen={showSidePanel}
                cartCount={props.cartCount}
                panelToggleClicked={sidePanelToggleHandler}/>

            <SidePanel
                open={showSidePanel}
                closed={sidePanelToggleHandler}/>

            <main className={layoutClasses.Content}>
                {props.children}
            </main>
        </Aux>
    );
}

export default Layout;
