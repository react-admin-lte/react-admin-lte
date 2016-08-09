import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxFooter from '../src/BoxFooter';

test('<BoxFooter>', t => {
  const wrapper = shallow(<BoxFooter>
    <div>stuff</div>
  </BoxFooter>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
