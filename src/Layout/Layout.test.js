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
    <Layout className="best-layout" sidebarCollapsed={true}>
      <div />
    </Layout>
  ))).toMatchSnapshot();
});

it('renders changed collapsed sidebar prop', () => {
  const wrapper = shallow(<Layout><div /></Layout>);
  wrapper.setProps({ sidebarCollapsed: true });
  expect(wrapper).toMatchSnapshot();
});

it('renders changed collapsed sidebar on toggle', () => {
  class SidebarToggler extends Component {
    static contextTypes = {
      $adminlte_layout: PropTypes.shape({
        toggleMainSidebar: PropTypes.func
      })
    };

    componentDidMount() {
      this.context.$adminlte_layout.toggleMainSidebar();
    }

    render() {
      return null;
    }
  }

  expect(mount((
    <Layout>
      <SidebarToggler />
    </Layout>
  ))).toMatchSnapshot();
});
