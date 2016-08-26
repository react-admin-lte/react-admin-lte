import React from 'react';
import { shallow, mount } from 'enzyme';
import test from 'tape';

import { Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import MailboxAttachment from '../src/MailboxAttachment';

test('<MailboxAttachment> given image > given icon', t => {
  const wrapper = mount(<MailboxAttachment
    img={<img src="#" />}
    icon="rocket"
  />);

  t.ok(wrapper.contains(<span className="mailbox-attachment-icon has-img"><img src="#" /></span>), 'renders given image');
  t.notOk(wrapper.contains(<span className="mailbox-attachment-icon"><FontAwesome name="rocket" /></span>), 'does not render given icon');
  t.notOk(wrapper.contains(<span className="mailbox-attachment-icon"><FontAwesome name="file-o" /></span>), 'does not render default icon');
  t.end();
});

test('<MailboxAttachment> given icon > default icon', t => {
  const wrapper = mount(<MailboxAttachment
    icon="rocket"
  />);

  t.ok(wrapper.contains(<span className="mailbox-attachment-icon"><FontAwesome name="rocket" /></span>), 'renders given icon');
  t.notOk(wrapper.contains(<span className="mailbox-attachment-icon"><FontAwesome name="file-o" /></span>), 'does not render default icon');
  t.end();
});

test('<MailboxAttachment> default icon', t => {
  const wrapper = mount(<MailboxAttachment />);

  t.ok(wrapper.contains(<span className="mailbox-attachment-icon"><FontAwesome name="file-o" /></span>), 'renders default icon');
  t.end();
});

test('<MailboxAttachment> onNameClick', t => {
  let called = false;
  const onNameClick = () => { called = true };

  const wrapper = mount(<MailboxAttachment
    onNameClick={onNameClick}
  />);

  wrapper.find('a').simulate('click');
  t.ok((called === true), 'attaches callback');
  t.end();
});

test('<MailboxAttachment> onDownloadClick', t => {
  let called = false;
  const onDownloadClick = () => { called = true };

  const wrapper = mount(<MailboxAttachment
    onDownloadClick={onDownloadClick}
  />);

  wrapper.find(Button).simulate('click');
  t.ok((called === true), 'attaches callback');
  t.end();
});

test('<MailboxAttachment> name', t => {
  const wrapper = shallow(<MailboxAttachment
    name={<p>n</p>}
  />);

  t.ok(wrapper.find('a').contains(<p>n</p>), 'renders name');
  t.end();
});

test('<MailboxAttachment> size', t => {
  const wrapper = mount(<MailboxAttachment
    size='100kb'
  />);

  t.ok(wrapper.find({className: 'mailbox-attachment-size'}).text() === '100kb', 'renders name');
  t.end();
});
