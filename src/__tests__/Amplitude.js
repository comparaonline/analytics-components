import React from 'react';
import { render } from 'enzyme';
import Amplitude from '../Amplitude';

describe('Amplitude', () => {
  describe('when is id prop is passed', () => {
    const wrapper = render(<Amplitude apiKey="at3hf12h78u98i" />);

    it('renders null', () => {
      expect(wrapper.html()).toEqual('');
    });
  });
});
