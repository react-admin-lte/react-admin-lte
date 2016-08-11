import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MainHeader from '../src/MainHeader';

test('<MainHeader>', t => {
  const wrapper = shallow(<MainHeader>
      <div>stuff</div>
    </MainHeader>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
