import React from 'react';
import { shallow } from 'enzyme';
import test from 'tape';

import Layout from '../src/Layout';

test('<Layout>', t => {
  const wrapper = shallow(<Layout skin="blue">
      <p>asdf</p>
    </Layout>);

  t.ok(wrapper.hasClass('sidebar-mini'), 'has sidebar-mini class');
  t.ok(wrapper.hasClass('layout-fixed'), 'has type fixed');
  t.ok(wrapper.hasClass('skin-blue'), 'blue skin is used');
  t.ok(wrapper.children().hasClass('wrapper'), 'renders child wrapper');
  t.ok(wrapper.contains(<div className="wrapper"><p>asdf</p></div>), 'contains children');
  t.end();
});

test('<Layout> type', t => {
  const wrapper = shallow(<Layout type="boxed">
      <p>asdf</p>
    </Layout>);

  t.ok(wrapper.hasClass('layout-boxed'), 'is used');
  t.end();
});

test('<Layout> sidebar-collapsed', t => {
  const wrapper = shallow(<Layout type="sidebar-collapsed">
      <p>asdf</p>
    </Layout>);

  t.ok(wrapper.hasClass('sidebar-collapsed'), 'sidebar is collapsed');
  t.end();
});
