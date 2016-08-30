import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import SidebarUserPanelImage from '../src/SidebarUserPanelImage';

test('<SidebarUserPanelImage>', t => {
  const tImg = <img src="#" />
  const wrapper = shallow(<SidebarUserPanelImage image={tImg} />);

  t.ok(wrapper.contains(<div className="pull-left image">
      <img src="#" />
    </div>), 'renders children');
  t.end();
});
