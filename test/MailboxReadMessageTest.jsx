import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MailboxReadMessage from '../src/MailboxReadMessage';

test('<MailboxReadMessage>', t => {
  const wrapper = shallow(<MailboxReadMessage>
    <div>stuff</div>
  </MailboxReadMessage>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
