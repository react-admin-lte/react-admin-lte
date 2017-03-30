import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarMenu from '../src/MainSidebarMenu';

test('<MainSidebarMenu>', t => {
  const wrapper = shallow(<MainSidebarMenu>
      <div>stuff</div>
    </MainSidebarMenu>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
