import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import DataTableControls from '../src/DataTableControls';

test('<DataTableControls>', t => {
  const wrapper = shallow(<DataTableControls>
    <div>stuff</div>
  </DataTableControls>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
