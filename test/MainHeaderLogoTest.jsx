import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MainHeaderLogo from '../src/MainHeaderLogo';

test('<MainHeaderLogo>', t => {
  const wrapper = shallow(<MainHeaderLogo
      href="#"
      mini={<img src="#" />}
      large={<img src="#" />}
    />);

  t.ok(wrapper.contains(<a href="#" className="logo">
    <span className="logo-mini">
      <img src="#" />
    </span>
    <span className="logo-large">
      <img src="#" />
    </span>
  </a>), 'renders correctly');
  t.end();
});
