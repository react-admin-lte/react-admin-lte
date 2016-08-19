import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MailboxAttachments from '../src/MailboxAttachments';

test('<MailboxAttachments>', t => {
  const wrapper = shallow(<MailboxAttachments>
    <li>asdf</li>
  </MailboxAttachments>);

  t.ok(wrapper.contains(<li>asdf</li>), 'renders children');
  t.end();
});
