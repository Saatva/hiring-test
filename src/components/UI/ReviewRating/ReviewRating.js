import React, { useState, useEffect } from 'react';

import reviewRatingClasses from './ReviewRating.module.scss';

const ReviewRating = (props) => {
    const [rating, setRating] = useState(0);

    useEffect(() => {
        setRating(props.rating);
    }, [props.rating]);

    return (
        <div className={reviewRatingClasses.ReviewRating}>
            {[0, 1, 2, 3, 4, 5].map((star, i) => {
                return (
                    <span key={i}>
                        {rating < star ?
                            0 < star ? "☆" : "★"
                            :
                            "★"
                        }
                    </span>
                );
            })}
        </div>
    );
};


export default ReviewRating;