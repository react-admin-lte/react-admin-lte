import React from 'react';
import { shallow } from 'enzyme';
import BoxToolButton from './BoxToolButton';

it('renders default', () => {
  expect(shallow(<BoxToolButton><div /></BoxToolButton>))
    .toMatchSnapshot();
});

it('renders a when href present', () => {
  expect(shallow(<BoxToolButton href="/thegoods"><div /></BoxToolButton>))
    .toMatchSnapshot();
});

it('renders button type', () => {
  expect(shallow(<BoxToolButton type="submit"><div /></BoxToolButton>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow((
    <BoxToolButton component="Link" to="/thegoods">
      <div />
    </BoxToolButton>
  ))).toMatchSnapshot();
});
