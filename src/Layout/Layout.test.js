import React from 'react';
import { shallow } from 'enzyme';
import Layout from './Layout';

it('renders empty', () => {
  expect(shallow((
    <Layout className="best-layout">
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders fixed', () => {
  expect(shallow((
    <Layout className="best-layout" fixed={true}>
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders boxed', () => {
  expect(shallow((
    <Layout className="best-layout" boxed={true}>
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders top navigation', () => {
  expect(shallow((
    <Layout className="best-layout" topNav={true}>
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders mini sidebar', () => {
  expect(shallow((
    <Layout className="best-layout" miniSidebar={true}>
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders collapsed sidebar', () => {
  expect(shallow((
    <Layout className="best-layout" miniSidebar={true}>
      <div />
    </Layout>
  ))).toMatchSnapshot();
});
