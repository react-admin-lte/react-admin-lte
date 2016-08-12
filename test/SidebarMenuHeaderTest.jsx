import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarMenuHeader from '../src/SidebarMenuHeader';

test('<SidebarMenuHeader>', t => {
  const wrapper = shallow(<SidebarMenuHeader title="asdf" />);

  t.ok(wrapper.contains(<li className="header">asdf</li>), 'displays correct title');
  t.end();
});
