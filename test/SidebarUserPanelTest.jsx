import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarUserPanel from '../src/SidebarUserPanel';

test('<SidebarUserPanel>', t => {
  const wrapper = shallow(<SidebarUserPanel>
      <div>stuff</div>
    </SidebarUserPanel>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
