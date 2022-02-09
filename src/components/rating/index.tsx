import React from "react";
import { ReactComponent as StarFill } from "assets/images/star-fill.svg";
import { ReactComponent as StarEmpty } from "assets/images/star-line.svg";
import { ReactComponent as StarHalf } from "assets/images/star-half-line.svg";
import "./styles.scss";

const Rating = ({ value }: TRatingProps): React.ReactElement => {
    const floor = Math.floor(value);
    const decimalPart = value % 1;
    // If decimal part greater than 0.5 substract 1 star
    const totalEmpty = 5 - floor - (decimalPart >= 0.5 ? 1 : 0);

    const fullStars = Array.from({ length: floor }, () =>
        (Math.random() + 1).toString(36).substring(6)
    );

    const emptyStarts = Array.from({ length: totalEmpty }, () =>
        (Math.random() + 1).toString(35).substring(6)
    );

    return (
        <div className="ms-rating">
            {fullStars.map((key) => (
                <StarFill
                    className="ms-rating__fill"
                    key={`star-fill-${key}`}
                />
            ))}
            {decimalPart >= 0.5 && <StarHalf className="ms-rating__fill" />}
            {emptyStarts.map((key) => (
                <StarEmpty
                    className="ms-rating__fill"
                    key={`star-fill-${key}`}
                />
            ))}
        </div>
    );
};

type TRatingProps = {
    value: number;
};

export default Rating;
