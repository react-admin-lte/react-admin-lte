import * as React from 'react';
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
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
    <DataTableHeaderCell onClick={() => {}} />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders ascending', () => {
  const component = renderer.create(
    <DataTableHeaderCell sorted="asc" onClick={() => {}}/>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders descending', () => {
  const component = renderer.create(
    <DataTableHeaderCell sorted="desc" onClick={() => {}}/>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
