import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';

it('renders default', () => {
  expect(shallow(<Content><div /></Content>))
    .toMatchSnapshot();
});

it('renders custom component', () => {
  expect(shallow(<Content component="div"><div /></Content>))
    .toMatchSnapshot();
});

it('renders title', () => {
  expect(shallow(<Content title="Super important"><div /></Content>))
    .toMatchSnapshot();
});

it('renders subtitle', () => {
  expect(shallow(<Content subtitle="But only a little"><div /></Content>))
    .toMatchSnapshot();
});

it('renders breadcrumb', () => {
  expect(shallow(<Content breadcrumb="nom nom nom"><div /></Content>))
    .toMatchSnapshot();
});

it('renders custom header component', () => {
  expect(shallow(<Content headerComponent="div"><div /></Content>))
    .toMatchSnapshot();
});
