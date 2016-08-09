import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxBody from '../src/BoxBody';

test('<BoxBody>', t => {
  const wrapper = shallow(<BoxBody>
    <div>stuff</div>
  </BoxBody>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
