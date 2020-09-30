import React, { useState, useEffect } from "react";

import Rating from "./Rating";
import AddButton from "./AddButon";

import data from "../../data/categories.json";
const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export default function ChooseMattress() {

  const [mattresses, setMattresses] = useState(null);
  const [selectedMattress, setSelectedMattress] = useState("classic");

  useEffect(() => {
    const _mattresses = [];

    for (const _mattress in data.mattresses) {
      _mattresses.push(_mattress);
    }

    setMattresses(_mattresses);
    setSelectedMattress(_mattresses[0]);
  }, []);

  return (
    <section className="choose-mattress">
      <div className="container">
        <div className="panel">
          <div className="row">
            <div className="col col--xs-12 col--lg-7">
              <img src={`/assets/images/${selectedMattress}-carousel.jpg`} alt="classic" />
            </div>
            <div className="col col--xs-12 col--lg-5">
              <div className="panel__info">
                <h2 className="panel__info-title">Choose Your Mattress</h2>
                <span className="panel__info-select-label">
                  SELECT MATTRESS TYPE
                </span>
                {mattresses ? (
                <>
                  <ul className="panel__info-options">
                    {mattresses.map((mattress) => (
                    <li key={mattress} className={`panel__info-options__option ${ mattress===selectedMattress
                      ? "panel__info-options__option--selected" : null }`} onClick={()=> setSelectedMattress(mattress)}
                      >
                      {data.mattresses[mattress].name}
                    </li>
                    ))}
                  </ul>
                  <div className="panel__info-description">
                    <span className="panel__info-description__name">{`${data.mattresses[selectedMattress].name}
                      Matress`}</span>
                    <span className="panel__info-description__price">{`${formatter.format(
                      data.mattresses[selectedMattress].price
                      )}`}</span>
                  </div>
                  <Rating reviewRating={data.mattresses[selectedMattress].reviewRating} />
                </>
                ) : null}
                <AddButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
