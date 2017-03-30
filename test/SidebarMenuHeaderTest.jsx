import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarMenuHeader from '../src/MainSidebarMenuHeader';

test('<MainSidebarMenuHeader>', t => {
  const wrapper = shallow(<MainSidebarMenuHeader title="asdf" />);

  t.ok(wrapper.contains(<li className="header">asdf</li>), 'displays correct title');
  t.end();
});
