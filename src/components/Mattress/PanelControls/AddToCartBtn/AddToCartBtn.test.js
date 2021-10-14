import React from 'react';
import AddToCartBtn from './AddToCartBtn';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<AddToCartBtn />', () => {
    const itemAdded = jest.fn();

    const container = shallow(<AddToCartBtn itemAdded={itemAdded} />);

    it('should match the snapshot', () => {
        expect(container.html()).toMatchSnapshot();
    });

    it('should have a button', () => {
        expect(container.find('button').length).toEqual(1);
    });

    it('should call itemAdded handler when button is clicked', () => {
        const handleClick = jest.spyOn(React, "useState");
        handleClick.mockImplementation(item => [item, itemAdded]);

        container.find('button').simulate('click');

        expect(itemAdded).toHaveBeenCalled()
    });

});