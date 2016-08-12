import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarToggle from '../src/SidebarToggle';

test('<SidebarToggle>', t => {
  const wrapper = shallow(<SidebarToggle />);

  t.ok(wrapper.contains(<a href="#" className="sidebar-toggle">
    <span className="sr-only" />
    <span className="icon-bar" />
    <span className="icon-bar" />
    <span className="icon-bar" />
  </a>), 'renders correctly');
  t.end();
});
