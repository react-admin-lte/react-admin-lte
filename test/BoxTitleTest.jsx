import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxTitle from '../src/BoxTitle';

test('<BoxTitle>', t => {
  const wrapper = shallow(<BoxTitle text="t" />);

  t.ok(wrapper.contains(<h3 className="box-title">t</h3>), 'renders title');
  t.end();
});
