import React from 'react';
import { shallow, mount } from 'enzyme';

import { GuessForm } from './guess-form';

describe('<GuessForm />', () => {
  it('Renders without crashing', () => {
    shallow(<GuessForm />);
  });

  it('Should dispatch makeGuess callback when the form is submitted', () => {
    const dispatch = jest.fn();
    const value = "10";
    const wrapper = mount(<GuessForm makeGuess={dispatch(value)} />);
    wrapper.find('input[type="number"]').instance().value = value;
    expect(dispatch).toHaveBeenCalledWith(value.toString());
  });

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<GuessForm dispatch={e => {}}/>);
    const input = wrapper.find('input[type="number"]');
    input.instance().value = 10;
    wrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});