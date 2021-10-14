import React from 'react';

import panelToggleClasses from './PanelToggle.module.scss';

const PanelToggle = (props) => {
    let attachedClasses = [panelToggleClasses.PanelToggle];
    if (props.sidePanelOpen) attachedClasses = [panelToggleClasses.PanelToggle, panelToggleClasses.Open];

    return (
        <button
            className={attachedClasses.join(' ')}
            onClick={props.clicked}>
            <div>
                <span className={panelToggleClasses.Line}></span>
                <span className={panelToggleClasses.Line}></span>
                <span className={panelToggleClasses.Line}></span>
            </div>
        </button>
    );
}

export default PanelToggle;
