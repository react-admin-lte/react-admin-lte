import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import ContentHeader from '../src/ContentHeader';

test('<ContentHeader>', t => {
  const wrapper = shallow(<ContentHeader title="t" />);

  t.ok(wrapper.hasClass('content-header'), 'has .content-header class');
  t.ok(wrapper.contains(<h1>t</h1>), 'renders title');
  t.notOk(wrapper.contains(<small />), 'description container not rendered');
  t.end();
});

test('<ContentHeader> description', t => {
  const wrapper = shallow(<ContentHeader title="t" description="d" />);

  t.ok(wrapper.contains(<small>d</small>), 'description container rendered');
  t.end();
});
