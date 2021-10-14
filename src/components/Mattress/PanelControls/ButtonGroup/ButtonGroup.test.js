import React from 'react';
import ButtonGroup from './ButtonGroup';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<ButtonGroup />', () => {
    const buttonClicked = jest.fn();

    const container = shallow(<ButtonGroup buttonClicked={buttonClicked} mattresses={[{name: 'Classic', price: 120}, {name: 'Loom', price: 220}]} />);

    it('should have a button for each mattress', () => {
        expect(container.find('button').length).toEqual(2);
    });

    it('should call buttonClicked handler with the correct mattress when button is clicked', () => {
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(mattress => [mattress, buttonClicked]);

        container.find('button').at(1).simulate('click');

        expect(buttonClicked).toHaveBeenCalledWith({name: 'Loom', price: 220})
    });

});