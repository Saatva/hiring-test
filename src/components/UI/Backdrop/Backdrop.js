import React from 'react';

import backdropClasses from './Backdrop.module.scss';

const Backdrop = (props) => (
    props.show ? <div className={backdropClasses.Backdrop} onClick={props.clicked}></div> : null
);

export default Backdrop;
