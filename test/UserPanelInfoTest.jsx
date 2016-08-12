import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import UserPanelInfo from '../src/UserPanelInfo';

test('<UserPanelInfo>', t => {
  const wrapper = shallow(<UserPanelInfo>
      <div>stuff</div>
    </UserPanelInfo>);

  t.ok(wrapper.contains(<div>stuff</div>));
  t.end();
});
