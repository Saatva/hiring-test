import React from 'react';

import Aux from '../../../hoc/Auxx/Auxx';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Logo from '../../Logo/Logo';
//import NavbarItems from '../NavbarItems/NavbarItems';

import sidePanelClasses from './SidePanel.module.scss';

const SidePanel = (props) => {
    let attachedClasses = [sidePanelClasses.SidePanel, sidePanelClasses.Close];
    if (props.open) attachedClasses = [sidePanelClasses.SidePanel, sidePanelClasses.Open]

    return (
        <Aux>
            <Backdrop
                show={props.open}
                clicked={props.closed}/>
            <aside className={attachedClasses.join(' ')}>
                <div className={sidePanelClasses.Logo}>
                    <Logo />
                </div>
                <nav>
                    {/* <NavbarItems /> */}
                </nav>
            </aside>
        </Aux>
    );
};

export default SidePanel;
