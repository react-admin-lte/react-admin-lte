import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import ContentBody from '../src/ContentBody';

test('<Content>', t => {
  const wrapper = shallow(<ContentBody>
    <div>stuff</div>
  </ContentBody>);

  t.ok(wrapper.hasClass('content'), 'has .content class');
  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
