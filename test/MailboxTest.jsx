import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import Mailbox from '../src/Mailbox';

test('<Mailbox>', t => {
  const wrapper = shallow(<Mailbox>
    <div>stuff</div>
  </Mailbox>);

  t.ok(wrapper.contains(<div>stuff</div>), 'renders children');
  t.ok(wrapper.hasClass('box'), 'has box class');
  t.ok(wrapper.hasClass('box-primary'), 'has box-primary class');
  t.end();
});

test('<Mailbox> style', t => {
  const wrapper = shallow(<Mailbox style="default" />);

  t.ok(wrapper.hasClass('box-default'), 'has correct class');
  t.notOk(wrapper.hasClass('box-primary'), 'does not have default class');
  t.end();
});

test('<Mailbox> classname', t => {
  const wrapper = shallow(<Mailbox className="no-padding" />);

  t.ok(wrapper.hasClass('no-padding'), 'has correct class');
  t.end();
});
