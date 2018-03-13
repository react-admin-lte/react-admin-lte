import React from 'react';
import { shallow } from 'enzyme';
import Wrapper from './Wrapper';

it('renders correctly', () => {
  expect(shallow(<Wrapper className="best-wrapper"><div /></Wrapper>))
    .toMatchSnapshot();
});
