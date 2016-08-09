import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxHeader from '../src/BoxHeader';

test('<BoxHeader>', t => {
  const wrapper = shallow(<BoxHeader title="t">
    <BoxHeader.Tools />
  </BoxHeader>);

  t.ok(wrapper.hasClass('box-header'), 'has .box-header class');
  t.notOk(wrapper.hasClass('with-border'), 'has no border');
  t.ok(wrapper.contains(<h3 className="box-title">t</h3>), 'renders title');
  t.ok(wrapper.contains(<BoxHeader.Tools />), 'renders children');
  t.end();
});
