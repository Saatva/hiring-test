import React, { useState } from 'react';

import mattressClasses from './Mattress.module.scss';
import Photo from './Photo/Photo';
import PanelControls from './PanelControls/PanelControls';

const Mattress = (props) => {
    const [selectedMattress, setSelectedMattress] = useState(props.data[0]);

    const selectedMattressHandler = (mattress) => {
        setSelectedMattress(mattress);
        console.log(mattress)
    };

    return (
        <div className={mattressClasses.Container}>
            <div className={mattressClasses.Mattress}>
                <div className={mattressClasses.Photo}>
                    <Photo mattress={selectedMattress} />
                </div>
                <div className={mattressClasses.PanelControls}>
                    <PanelControls
                        itemAdded={props.itemAdded}
                        selectedMattress={selectedMattressHandler}
                        mattresses={props.data} />
                </div>
            </div>
        </div>
    );
}

export default Mattress;
