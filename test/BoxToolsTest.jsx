import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxTools from '../src/BoxTools';

test('<BoxTools>', t => {
  const wrapper = shallow(<BoxTools>
    <div>stuff</div>
  </BoxTools>);

  t.ok(wrapper.hasClass('box-tools'), 'has .box-tools class');
  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});

