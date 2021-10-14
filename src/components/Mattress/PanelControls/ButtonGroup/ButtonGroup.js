import React, { useState, useRef, useEffect } from 'react';

import buttonGroupClasses from './ButtonGroup.module.scss';

const ButtonGroup = (props) => {
    const [clickedBtnIndex, setClickedBtnIndex] = useState(0);
    const btnGroupElm = useRef(null);
    const btnIndxRef = useRef(0);
    const buttonsRef = useRef([]);

    const clickHandler = (mattress, i) => {
        props.buttonClicked(mattress);
        setClickedBtnIndex(i)
        btnIndxRef.current = i;
    };

    const buildBtnGroup = (mattresses) => {
        return (
            mattresses.map((mattress, i) => (
                <button
                    key={i}
                    ref={el => buttonsRef.current[i] = el}
                    name={mattress.name}
                    onClick={() => clickHandler(mattress, i)}
                >
                    {mattress.name}
                </button>
            ))
        )
    };

    const handleClickCallback = e => {
        if (btnGroupElm.current.contains(e.target)) {
            return;
        }

        if (clickedBtnIndex === btnIndxRef.current)
            setClickedBtnIndex(-1)
        else
            setClickedBtnIndex(clickedBtnIndex)
    };

    useEffect(() => {
        buttonsRef.current[btnIndxRef.current].focus();
        setClickedBtnIndex(btnIndxRef.current)
    }, [clickedBtnIndex]);

    useEffect(() => {
        buttonsRef.current[0].focus();
        document.addEventListener("mousedown", handleClickCallback);

        return () => {
            document.removeEventListener("mousedown", handleClickCallback);
        };
    }, []);

    return (
        <div className={buttonGroupClasses.ButtonGroup} ref={btnGroupElm}>
            {buildBtnGroup(props.mattresses)}
        </div>
    )
};

export default ButtonGroup;
