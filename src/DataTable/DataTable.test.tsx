import * as React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from '@react-bootstrap/pagination';
import * as renderer from 'react-test-renderer';
import DataTable from './DataTable';

test('calls onPageClick', () => {
  let called = false;
  const wrapper = shallow(<DataTable
    pageSize={10}
    totalItems={10}
    onPageClick={() => { called = true; }}
  />);
  wrapper.find(Pagination).simulate('select');
  expect(called).toEqual(true);
});

test('Renders no items', () => {
  const component = renderer.create(
    <DataTable
      totalItems={0}
      currentPage={1}
      pageSize={10}
      onPageClick={() => {}}
    >
      <tbody><tr><td>The goods</td></tr></tbody>
    </DataTable>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders first page', () => {
  const component = renderer.create(
    <DataTable
      totalItems={40}
      currentPage={1}
      pageSize={10}
      onPageClick={() => {}}
    >
      <tbody><tr><td>The goods</td></tr></tbody>
    </DataTable>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders intermediary page', () => {
  const component = renderer.create(
    <DataTable
      totalItems={40}
      currentPage={2}
      pageSize={10}
      onPageClick={() => {}}
    >
      <tbody><tr><td>The goods</td></tr></tbody>
    </DataTable>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders total items less than page count', () => {
  const component = renderer.create(
    <DataTable
      totalItems={33}
      currentPage={4}
      pageSize={10}
      onPageClick={() => {}}
    >
      <tbody><tr><td>The goods</td></tr></tbody>
    </DataTable>
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders total items equal to page count', () => {
  const component = renderer.create(
    <DataTable
      totalItems={40}
      currentPage={4}
      pageSize={10}
      onPageClick={() => {}}
    >
      <tbody><tr><td>The goods</td></tr></tbody>
    </DataTable>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
