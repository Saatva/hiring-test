import React, { useState } from 'react';

import panelControlsClasses from './PanelControls.module.scss';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import AddToCartBtn from './AddToCartBtn/AddToCartBtn';
import ReviewRating from '../../UI/ReviewRating/ReviewRating';

const PanelControls = (props) => {
    const [selectedMattress, setSelectedMattress] = useState(props.mattresses[0]);

    const selectedMattressHandler = (mattress) => {
        setSelectedMattress(mattress)
        props.selectedMattress(mattress);
    };

    return (
        <div className={panelControlsClasses.PanelControls}>
            <h1>Choose Your Mattress</h1>

            <label>SELECT MATTRESS TYPE</label>

            <ButtonGroup buttonClicked={selectedMattressHandler} mattresses={props.mattresses} />

            <div>
                <p>{selectedMattress.name} Mattress</p>
                <p>${selectedMattress.price}</p>
            </div>

            <div>
                <ReviewRating rating={selectedMattress.reviewRating}/>
            </div>

            <AddToCartBtn itemAdded={props.itemAdded} />
        </div>
    );
};

export default PanelControls;
