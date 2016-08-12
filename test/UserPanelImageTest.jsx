import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import UserPanelImage from '../src/UserPanelImage';

test('<UserPanelImage>', t => {
  const tImg = <img src="#" />
  const wrapper = shallow(<UserPanelImage image={tImg} />);

  t.ok(wrapper.contains(<div className="pull-left image">
      <img src="#" />
    </div>), 'renders children');
  t.end();
});
