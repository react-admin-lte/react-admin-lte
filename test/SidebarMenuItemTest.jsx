import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarMenuItem from '../src/MainSidebarMenuItem';

test('<MainSidebarMenuItem>', t => {
  const wrapper = shallow(<MainSidebarMenuItem>
      <div>stuff</div>
    </MainSidebarMenuItem>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.notOk(wrapper.hasClass("active"), 'is not active by default');
  t.end();
});

test('<MainSidebarMenuItem active>', t => {
  const wrapper = shallow(<MainSidebarMenuItem active />);

  t.ok(wrapper.hasClass("active"), 'is active');
  t.end();
});
