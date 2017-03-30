import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarUserPanel from '../src/MainSidebarUserPanel';

test('<MainSidebarUserPanel>', t => {
  const wrapper = shallow(<MainSidebarUserPanel
    image={<img src="#" />}
    info={<div>stuff</div>}
  />);

  t.ok(wrapper.contains(<div className="pull-left image"><img src="#" /></div>), 'renders image');
  t.ok(wrapper.contains(<div className="pull-left info"><div>stuff</div></div>), 'renders info');
  t.end();
});
