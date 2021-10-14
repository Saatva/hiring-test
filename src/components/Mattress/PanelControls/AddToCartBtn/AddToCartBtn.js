

import React, { useState } from 'react';

import addToCartBtnClasses from './AddToCartBtn.module.scss';

const AddToCartBtn = (props) => {
    const [disabled, setDisabled] = useState(false);

    const clickHandler = () => {
        props.itemAdded();
        setDisabled(true);
        setTimeout(() => setDisabled(false));
    }

    return (
        <button
            className={addToCartBtnClasses.AddToCartBtn}
            disabled={disabled}
            onClick={clickHandler}>Add to Cart</button>
    );
};

export default AddToCartBtn;
