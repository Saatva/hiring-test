import React from 'react';

import logoClasses from './Logo.module.scss';

import logoImg from '../../assets/icons/saatva.svg';

const Logo = (props) => {
    
    return (
        <div className={logoClasses.Logo}>
            <img src={logoImg} alt="Saatva Logo"/>
        </div>
    );
};

export default Logo;
