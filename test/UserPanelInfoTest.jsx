import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarUserPanelInfo from '../src/SidebarUserPanelInfo';

test('<SidebarUserPanelInfo>', t => {
  const wrapper = shallow(<SidebarUserPanelInfo>
      <div>stuff</div>
    </SidebarUserPanelInfo>);

  t.ok(wrapper.contains(<div>stuff</div>));
  t.end();
});
