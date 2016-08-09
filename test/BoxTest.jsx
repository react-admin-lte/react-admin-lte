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
