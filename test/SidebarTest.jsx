import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import Sidebar from '../src/MainSidebar';

test('<MainSidebar>', t => {
  const wrapper = shallow(<MainSidebar>
      <div>stuff</div>
    </MainSidebar>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
