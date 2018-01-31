import * as PropTypes from 'prop-types';
import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Layout from './Layout';

test('Layout sets body classes on mount', () => {
  mount(<Layout skin="blue" />);

  expect(document.body.classList.contains('skin-blue')).toEqual(true);
  expect(document.body.classList.contains('sidebar-mini')).toEqual(true);
});

test('Layout sets boxed class on body', () => {
  mount(<Layout skin="blue" boxed />);

  expect(document.body.classList.contains('layout-boxed')).toEqual(true);
});

test('Layout sets fixed class on body', () => {
  mount(<Layout skin="blue" fixed />);

  expect(document.body.classList.contains('fixed')).toEqual(true);
});

test('Layout sets body classes on receiving props', () => {
  const wrapper = mount(<Layout skin="blue" boxed />);

  wrapper.setProps({ skin: 'red', boxed: false, fixed: false });

  expect(document.body.classList.contains('skin-blue')).toEqual(false);
  expect(document.body.classList.contains('skin-red')).toEqual(true);
  expect(document.body.classList.contains('layout-boxed')).toEqual(false);
  expect(document.body.classList.contains('fixed')).toEqual(false);
});

test('Layout keeps same skin on receiving props', () => {
  const wrapper = mount(<Layout skin="blue" />);

  wrapper.setProps({ skin: 'blue' });

  expect(document.body.classList.contains('skin-blue')).toEqual(true);
});

test('Layout removes body classes on unmount', () => {
  const wrapper = mount(<Layout skin="blue" boxed fixed />);

  document.body.classList.add('sidebar-collapse');

  wrapper.unmount();

  expect(document.body.classList.contains('sidebar-mini')).toEqual(false);
  expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
  expect(document.body.classList.contains('skin-blue')).toEqual(false);
  expect(document.body.classList.contains('layout-boxed')).toEqual(false);
  expect(document.body.classList.contains('fixed')).toEqual(false);
});

interface SetCollapseProps {
  collapsed: boolean;
};

class SetCollapse extends React.Component<SetCollapseProps, void> {
  constructor(props, context) {
    super(props);
    context.$adminlte_layout.setMainSidebarCollapsed(props.collapsed);
  }

  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
  }

  static contextTypes = {
    $adminlte_layout: PropTypes.shape({
      setMainSidebarCollapsed: PropTypes.func,
    }),
  };

  render() {
    return null;
  }
}

test('Collapses sidebar on set', () => {
  mount(<Layout skin="blue"><SetCollapse collapsed={true} /></Layout>);
  expect(document.body.classList.contains('sidebar-collapse')).toEqual(true);
});

test('Expands sidebar on set', () => {
  document.body.classList.add('sidebar-collapse');
  mount(<Layout skin="blue"><SetCollapse collapsed={false} /></Layout>);
  expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
});

class ToggleCollapse extends React.Component<{}, void> {
  constructor(props, context) {
    super(props);
    context.$adminlte_layout.toggleMainSidebar();
  }

  static contextTypes = {
    $adminlte_layout: PropTypes.shape({
      toggleMainSidebar: PropTypes.func,
    }),
  }

  render() {
    return null;
  }
}

test('Collapses sidebar on toggle', () => {
  mount(<Layout skin="blue"><ToggleCollapse /></Layout>);
  expect(document.body.classList.contains('sidebar-collapse')).toEqual(true);
});

test('Expands sidebar on toggle', () => {
  document.body.classList.add('sidebar-collapse');
  mount(<Layout skin="blue"><ToggleCollapse /></Layout>);
  expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
});

test('Renders default', () => {
  const component = renderer.create(
    <Layout skin="blue" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders boxed', () => {
  const component = renderer.create(
    <Layout boxed skin="blue" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders fixed', () => {
  const component = renderer.create(
    <Layout fixed skin="blue" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
