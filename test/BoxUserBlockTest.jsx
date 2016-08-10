import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import BoxUserBlock from '../src/BoxUserBlock';

test('<BoxUserBlock>', t => {
  const wrapper = shallow(<BoxUserBlock
      image={<img src="#" />}
      username="n"
      href="#"
      description="d"
    />);

  t.ok(wrapper.contains(<div className="user-block">
      <img src="#" />
      <span className="username">
        <a href="#">n</a>
      </span>
      <span className="description">d</span>
    </div>), 'renders user block');
  t.end();
});
