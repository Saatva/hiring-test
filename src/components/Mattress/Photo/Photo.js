import React, { useState, useEffect } from 'react';

import photoClasses from './Photo.module.scss';

const Photo = (props) => {
    const [image, setImage] = useState(null);

    const loadImage = mattress => {
        import(`../../../assets/images/${mattress.imageFileName}`).then(image => setImage(image.default));
    };

    useEffect(() => loadImage(props.mattress), [props.mattress]);

    return (
        <div className={photoClasses.Photo}>
            {image && <img src={image} alt={props.mattress.name} />}
        </div>
    );
};

export default Photo;
