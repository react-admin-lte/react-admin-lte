import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import Sidebar from '../src/Sidebar';

test('<Sidebar>', t => {
  const wrapper = shallow(<Sidebar>
      <div>stuff</div>
    </Sidebar>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
