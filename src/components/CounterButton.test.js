import React from 'react';
import { shallow } from 'enzyme';

import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
  expect(shallow(<CounterButton />)).toMatchSnapshot();
})