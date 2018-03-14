import React from 'react';
import { shallow } from 'enzyme';
import Box from './Box';

it('renders default', () => {
  expect(shallow(<Box><div /></Box>))
    .toMatchSnapshot();
});

it('renders with style', () => {
  expect(shallow(<Box style="default"><div /></Box>))
    .toMatchSnapshot();
});

it('renders solid', () => {
  expect(shallow(<Box solid><div /></Box>))
    .toMatchSnapshot();
});

it('renders loading', () => {
  expect(shallow(<Box loading><div /></Box>))
    .toMatchSnapshot();
});

it('renders loading indicator', () => {
  expect(shallow(<Box loading loadingIndicator={<div>spin</div>}><div /></Box>))
    .toMatchSnapshot();
});

it('renders collapsed', () => {
  expect(shallow(<Box collapsed><div /></Box>))
    .toMatchSnapshot();
});
