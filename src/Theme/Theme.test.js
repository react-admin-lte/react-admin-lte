import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { mount, shallow } from 'enzyme';
import { Theme } from './Theme';

it('renders empty', () => {
  expect(shallow((
    <Theme>
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders fixed', () => {
  expect(shallow((
    <Theme fixed={true}>
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders boxed', () => {
  expect(shallow((
    <Theme boxed={true}>
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders top navigation', () => {
  expect(shallow((
    <Theme topNav={true}>
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders mini sidebar', () => {
  expect(shallow((
    <Theme miniSidebar={true}>
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders collapsed sidebar', () => {
  expect(shallow((
    <Theme
      sidebarCollapsed={true}
      onChange={() => { return; }}
    >
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders skin', () => {
  expect(shallow((
    <Theme skinColor="blue">
      <div />
    </Theme>
  ))).toMatchSnapshot();
});

it('renders changed collapsed sidebar on toggle', () => {
  const sentEvent = {};
  let receivedCollapsed = false;
  let receivedEvent;

  class SidebarToggler extends Component {
    static contextTypes = {
      $adminlte_theme: PropTypes.shape({
        onChange: PropTypes.func
      })
    };

    componentDidMount() {
      this.context.$adminlte_theme.onChange(sentEvent);
    }

    render() {
      return null;
    }
  }

  mount(
    <Theme onChange={(collapsed, e) => {
      receivedCollapsed = collapsed;
      receivedEvent = e;
    }}>
      <SidebarToggler />
    </Theme>
  );

  expect(receivedCollapsed).toEqual(true);
  expect(receivedEvent).toEqual(sentEvent);
});
