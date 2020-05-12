import * as React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';

it('renders without crashing', () => {
  shallow(<Header />)
})
