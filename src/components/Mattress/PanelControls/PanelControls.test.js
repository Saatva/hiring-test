import React from 'react';
import PanelControls from './PanelControls';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import ReviewRating from './../../UI/ReviewRating/ReviewRating';
import AddToCartBtn from './AddToCartBtn/AddToCartBtn';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });


describe('<PanelControls />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<PanelControls mattresses={[{name: 'Classic', price: 120}]} />);
    });

    it('should match the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    it('should render <ButtonGroup />', () => {
        expect(wrapper.find(ButtonGroup)).toHaveLength(1);
    })

    it('should render <ReviewRating />', () => {
        expect(wrapper.find(ReviewRating)).toHaveLength(1);
    })

    it('should render <AddToCartBtn />', () => {
        expect(wrapper.find(AddToCartBtn)).toHaveLength(1);
    })

    it('should contain the correct HTML elements with data />', () => {
        expect(wrapper.contains(<p>Classic Mattress</p>)).toEqual(true);
        expect(wrapper.contains(<p>$120</p>)).toEqual(true);
    })
})