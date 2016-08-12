import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarMenu from '../src/SidebarMenu';

test('<SidebarMenu>', t => {
  const wrapper = shallow(<SidebarMenu>
      <div>stuff</div>
    </SidebarMenu>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
