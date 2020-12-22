import React from 'react';
import { shallow } from 'enzyme';

import CardList from './CardList';

it('expect to render CardList component', () => {
  // expect(shallow(<CardList/>).length).toEqual(1);
  const mockRobots = [
    {
      id: 1,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com'
    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})