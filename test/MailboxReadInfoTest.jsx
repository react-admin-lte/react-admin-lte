import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import MailboxReadInfo from '../src/MailboxReadInfo';

test('<MailboxReadInfo>', t => {
  const wrapper = shallow(<MailboxReadInfo>
    <div>stuff</div>
  </MailboxReadInfo>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.end();
});
