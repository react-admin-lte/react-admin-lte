import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import Content from '../src/Content';

test('<Content>', t => {
  const wrapper = shallow(<Content>
    <Content.Header title="t" />
    <Content.Body />
  </Content>);

  t.ok(wrapper.hasClass('content-wrapper'), 'has .content-wrapper class');
  t.ok(wrapper.contains(<Content.Body />), 'renders children');
  t.end();
});
