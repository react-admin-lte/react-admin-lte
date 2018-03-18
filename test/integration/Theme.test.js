import React from 'react';
import { mount } from 'enzyme';
import Theme from '../../src/Theme';
import MainHeader from '../../src/MainHeader';

it('sidebar toggled on click', () => {
  let received = false;
  const wrapper = mount(
    <Theme className="layout-div" onChange={() => { received = true; }}>
      <MainHeader />
    </Theme>
  );
  wrapper.find('.sidebar-toggle').simulate('click');
  expect(received).toEqual(true);
});
