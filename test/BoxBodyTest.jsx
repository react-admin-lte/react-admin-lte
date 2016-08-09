import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxBody from '../src/BoxBody';

test('<BoxBody>', t => {
  const wrapper = shallow(<BoxBody>
    <div>stuff</div>
  </BoxBody>);

  t.ok(wrapper.hasClass('box-body'), 'has .box-body class');
  t.notOk(wrapper.hasClass('no-padding'), 'does not have .no-padding class');
  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});

test('<BoxBody> padding', t => {
  const wrapper = shallow(<BoxBody padding={false} />);

  t.ok(wrapper.hasClass('no-padding'), 'has .no-padding class');
  t.end();
});
