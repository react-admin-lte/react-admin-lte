import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import LoginPage from '../src/LoginPage';

test('<LoginPage>', t => {
  const wrapper = shallow(<LoginPage>
    <div>stuff</div>
  </LoginPage>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
