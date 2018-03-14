import React from 'react';
import { shallow } from 'enzyme';
import ContentWrapper from './ContentWrapper';

it('renders default', () => {
  expect(shallow(<ContentWrapper><div /></ContentWrapper>))
    .toMatchSnapshot();
});

