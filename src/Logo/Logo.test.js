import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

it('renders default', () => {
  expect(shallow(<Logo />))
    .toMatchSnapshot();
});

it('renders mini logo', () => {
  expect(shallow(<Logo mini={<div>mini</div>} />))
    .toMatchSnapshot();
});

it('renders large logo', () => {
  expect(shallow(<Logo large={<div>large</div>} />))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<Logo component="Link" />))
    .toMatchSnapshot();
});


