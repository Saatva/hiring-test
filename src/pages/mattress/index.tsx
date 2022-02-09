import React from "react";
import Carousel from "components/carousel";
import { useAppContext } from "context";
import Select from "components/select";
import { AppActions } from "context/actions";
import "./styles.scss";
import Rating from "components/rating";

const MattressPage = (): React.ReactElement => {
    const {
        state: { mattresses, selected },
        dispatch,
    } = useAppContext();

    const mattressesList = Object.entries(mattresses);
    const selectedMattress = mattressesList.find(
        (item) => item[0] === selected
    )?.[1];

    const renderImages = () =>
        mattressesList.map(([key, value]) => (
            <img
                key={`matrees-img-${key}`}
                src={`/images/${value.imageFileName}`}
                alt={value.name}
            />
        ));

    const activeIndex = mattressesList.findIndex(
        (item) => item[0] === selected
    );

    const onSelect = (value: string) => {
        dispatch({ type: AppActions.SET_SELECTED_MATTRESS, payload: value });
    };

    const addToCart = () => {
        dispatch({
            type: AppActions.ADD_TO_SHOPPING_CART,
            payload: selectedMattress,
        });
    };

    return (
        <article className="ms-container ms-mattress-page">
            <div className="ms-mattress-page__section-container">
                <div className="ms-mattress-page__section">
                    <Carousel activeIndex={activeIndex}>
                        {renderImages()}
                    </Carousel>
                </div>
                <div className="ms-mattress-page__section">
                    <h2 className="ms-mattress-page__title">
                        Choose Your Mattress
                    </h2>

                    <Select
                        mattressesList={mattressesList}
                        selected={selected}
                        onSelect={onSelect}
                        label="select mattress type"
                    />

                    <Rating value={selectedMattress?.reviewRating || 0} />

                    <div className="ms-mattress-page__controls">
                        <div className="ms-mattress-page__description">
                            <span>{selectedMattress?.name} Mattress</span>
                            <span className="ms-mattress-page__description__price">
                                ${selectedMattress?.price.toLocaleString()}
                            </span>
                        </div>

                        <button
                            className="ms-mattress-page__cart-button"
                            onClick={addToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default MattressPage;
