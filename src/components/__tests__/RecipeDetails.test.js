import React from 'react';
import { shallow } from 'enzyme';
import { RecipeDetails } from '../RecipeDetails';

const noop = () => {};

const setup = (cb = noop) => {
  const recipe = { id: 10, title: 'test', favorite: false };
  const wrapper = shallow(<RecipeDetails recipe={ recipe } toggle={ cb } />);
  return { wrapper, recipe, cb };
};

describe('<Recipe />', () => {
  it('renders h3 component with title', () => {
    const { wrapper, recipe } = setup();

    expect(wrapper.find('h3').props().children).toBe(recipe.title);
  });


  it('should call toggle', () => {
    const { wrapper, recipe, cb } = setup(jest.fn());

    wrapper.find('input').simulate('change');

    expect(cb.mock.calls).toEqual([[recipe.id]]);
  });
});