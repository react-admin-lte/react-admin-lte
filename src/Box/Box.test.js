import React from 'react';
import { shallow } from 'enzyme';
import Box from './Box';
import Overlay from '../Overlay';

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

it('renders collapsed', () => {
  expect(shallow(<Box collapsed><div /></Box>))
    .toMatchSnapshot();
});

it('renders overlay without wrapper', () => {
  expect(shallow(<Box><Overlay><div /></Overlay></Box>))
    .toMatchSnapshot();
});
