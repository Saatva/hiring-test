import React from "react";
import classNames from "classnames";
import "./styles.scss";

const Carousel = ({
    children,
    activeIndex,
}: TCarouselProps): React.ReactElement => {
    return (
        <div className="ms-carousel">
            {React.Children.map(children, (child, index) => (
                <div
                    className={classNames("ms-carousel__item", {
                        "ms-carousel__item--active": index === activeIndex,
                    })}
                >
                    {child}
                </div>
            ))}
        </div>
    );
};

type TCarouselProps = {
    children: React.ReactNode;
    activeIndex?: number;
};

Carousel.defaultProps = {
    activeIndex: 0,
};

export default Carousel;
