import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from 'react-bootstrap';
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
