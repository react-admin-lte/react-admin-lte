import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import LoginBody from '../src/LoginBody';

test('<LoginBody>', t => {
  const wrapper = shallow(<LoginBody>
    <div>stuff</div>
  </LoginBody>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
