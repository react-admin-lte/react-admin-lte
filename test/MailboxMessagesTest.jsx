import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MailboxMessages from '../src/MailboxMessages';

test('<MailboxMessages>', t => {
  const wrapper = shallow(<MailboxMessages>
    <div>stuff</div>
  </MailboxMessages>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
