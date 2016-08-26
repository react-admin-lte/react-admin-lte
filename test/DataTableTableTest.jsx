import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import DataTableTable from '../src/DataTableTable';

test('<DataTableTable>', t => {
  const wrapper = shallow(<DataTableTable>
    <thead>asdf</thead>
  </DataTableTable>);

  t.ok(wrapper.contains(<thead>asdf</thead>), 'renders children');
  t.end();
});
