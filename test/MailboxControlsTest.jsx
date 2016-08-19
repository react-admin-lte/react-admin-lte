import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MailboxControls from '../src/MailboxControls';

test('<MailboxControls>', t => {
  const wrapper = shallow(<MailboxControls>
    <div>stuff</div>
  </MailboxControls>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
