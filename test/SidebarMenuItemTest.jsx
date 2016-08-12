import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarMenuItem from '../src/SidebarMenuItem';

test('<SidebarMenuItem>', t => {
  const wrapper = shallow(<SidebarMenuItem>
      <div>stuff</div>
    </SidebarMenuItem>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.notOk(wrapper.hasClass("active"), 'is not active by default');
  t.end();
});

test('<SidebarMenuItem active>', t => {
  const wrapper = shallow(<SidebarMenuItem active />);

  t.ok(wrapper.hasClass("active"), 'is active');
  t.end();
});
