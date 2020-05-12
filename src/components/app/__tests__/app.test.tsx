import * as React from 'react';
import { shallow } from 'enzyme';
import Dogs from '../../dogs';
import App from '../app';

describe('(Component) App', () => {
  it('it renders the Dogs component', () => {
    const component =  shallow(<App />);
    expect(component.find(Dogs)).toHaveLength(1);
  });
});
