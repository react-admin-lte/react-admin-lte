import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import LoginLogo from '../src/LoginLogo';

test('<LoginLogo>', t => {
  const wrapper = shallow(<LoginLogo>
    <div>stuff</div>
  </LoginLogo>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
