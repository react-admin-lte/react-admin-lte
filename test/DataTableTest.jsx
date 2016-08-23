import React from 'react';
import { mount } from 'enzyme';
import test from 'tape';
import { Row, Col } from 'react-bootstrap';

import DataTable from '../src/DataTable';

test('<DataTable> controls', t => {
  const wrapper = mount(<DataTable
    controls={<div>stuff</div>}
  />);

  t.ok(wrapper.contains(<Row><div>stuff</div></Row>), 'renders controls');
  t.end();
});

test('<DataTable> table', t => {
  const wrapper = mount(<DataTable
    table={<div>stuff</div>}
  />);

  t.ok(wrapper.contains(<Col sm={12}><div>stuff</div></Col>), 'renders table');
  t.end();
});

test('<DataTable> infoText', t => {
  const wrapper = mount(<DataTable
    infoText='asdf'
  />);

  t.ok(wrapper.contains(<div className="dataTables_info">asdf</div>), 'renders info text');
  t.end();
});

test('<DataTable> pagination', t => {
  const wrapper = mount(<DataTable
    pagination={<div>stuff</div>}
  />);

  t.ok(wrapper.contains(<div className="dataTables_paginate"><div>stuff</div></div>), 'renders pagination');
  t.end();
});
