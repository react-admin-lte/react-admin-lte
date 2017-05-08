import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import DataTableHeaderCell from './DataTableHeaderCell';

test('calls onClick', () => {
  let called = false;
  const wrapper = shallow(<DataTableHeaderCell
    onClick={() => { called = true; }}
  />);
  wrapper.simulate('click');
  expect(called).toEqual(true);
});

test('Renders default', () => {
  const component = renderer.create(
    <DataTableHeaderCell />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders ascending', () => {
  const component = renderer.create(
    <DataTableHeaderCell sorted="asc" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders descending', () => {
  const component = renderer.create(
    <DataTableHeaderCell sorted="desc" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
