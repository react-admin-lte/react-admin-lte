import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
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
    <Layout
      className="best-layout"
      sidebarCollapsed={true}
      onToggle={() => { return; }}
    >
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders default collapsed sidebar', () => {
  expect(shallow((
    <Layout
      className="best-layout"
      defaultSidebarCollapsed={true}
    >
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders changed collapsed sidebar on toggle', () => {
  const sentEvent = {};
  let receivedCollapsed = false;
  let receivedEvent;

  class SidebarToggler extends Component {
    static contextTypes = {
      $adminlte_layout: PropTypes.shape({
        onToggle: PropTypes.func
      })
    };

    componentDidMount() {
      this.context.$adminlte_layout.onToggle(sentEvent);
    }

    render() {
      return null;
    }
  }

  mount(
    <Layout onToggle={(collapsed, e) => {
      receivedCollapsed = collapsed;
      receivedEvent = e;
    }}>
      <SidebarToggler />
    </Layout>
  );

  expect(receivedCollapsed).toEqual(true);
  expect(receivedEvent).toEqual(sentEvent);
});

