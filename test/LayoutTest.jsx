import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import Layout from '../src/Layout';

test('<Layout>', t => {
  const wrapper = shallow(<Layout skin="blue">
      <p>asdf</p>
    </Layout>);

  t.ok(wrapper.hasClass('sidebar-mini'), 'has (default) sidebar-mini class');
  t.ok(wrapper.children().hasClass('wrapper'), 'renders child wrapper');
  t.end()
});

test('<Layout> skin', t => {
  const wrapper = shallow(<Layout skin="blue">
      <p>asdf</p>
    </Layout>);

  t.ok(wrapper.hasClass('skin-blue'), 'is used');
  t.end()
});

test('<Layout> type', t => {
  const wrapper = shallow(<Layout type="boxed">
      <p>asdf</p>
    </Layout>);

  t.ok(wrapper.hasClass('layout-boxed'), 'is used');
  t.end()
});
