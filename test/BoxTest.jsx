import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';
import FontAwesome from 'react-fontawesome';

import Box from '../src/Box';

test('<Box>', t => {
  const wrapper = shallow(<Box>
    <Box.Header title="t" />
    <Box.Body />
  </Box>);

  t.ok(wrapper.hasClass('box'), 'has .box class');
  t.ok(wrapper.hasClass('box-default'), 'has .box-default class');
  t.notOk(wrapper.contains(<div className="overlay" />), 'spinner not shown');
  t.ok(wrapper.contains(<Box.Header title="t" />), 'renders children');
  t.end();
});

test('<Box> loading', t => {
  const wrapper = shallow(<Box loading={true}>
    <Box.Header title="t" />
    <Box.Body />
  </Box>);

  t.ok(wrapper.contains(<div className="overlay">
    <FontAwesome name="refresh" spin />
  </div>), 'spinner shown');
  t.end();
});

test('<Box> style', t => {
  const wrapper = shallow(<Box style="primary">
    <Box.Header title="t" />
    <Box.Body />
  </Box>);

  t.ok(wrapper.hasClass('box-primary'), 'is used');
  t.end();
});

test('<Box> type', t => {
  const wrapper = shallow(<Box type="solid">
    <Box.Header title="t" />
    <Box.Body />
  </Box>);

  t.ok(wrapper.hasClass('box-solid'), 'is used');
  t.end();
});
