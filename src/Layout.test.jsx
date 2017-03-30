import React from 'react';
import { mount } from 'enzyme';
import Layout from './Layout';
import MainSidebar from './MainSidebar';

test('Layout sets body classes on mount', () => {
  mount(<Layout skin="blue" />);

  expect(document.body.classList.contains('skin-blue')).toEqual(true);
  expect(document.body.classList.contains('sidebar-mini')).toEqual(true);
});

test('Layout sets boxed class on body', () => {
  mount(<Layout skin="blue" boxed />);

  expect(document.body.classList.contains('layout-boxed')).toEqual(true);
});

test('Layout sets body classes on receiving props', () => {
  const wrapper = mount(<Layout skin="blue" boxed />);

  wrapper.setProps({ skin: 'red', boxed: false });

  expect(document.body.classList.contains('skin-blue')).toEqual(false);
  expect(document.body.classList.contains('skin-red')).toEqual(true);
  expect(document.body.classList.contains('layout-boxed')).toEqual(false);
});

test('Layout removes body classes on unmount', () => {
  class MainSidebarFake extends React.Component {
    constructor(props, context) {
      super(props, context);
      context.$adminlte_layout.toggleMainSidebar();
    }

    static contextTypes = MainSidebar.contextTypes;

    render() {
      return null;
    }
  }

  const wrapper = mount(<Layout skin="blue" boxed><MainSidebarFake /></Layout>);

  expect(document.body.classList.contains('sidebar-collapse')).toEqual(true);

  wrapper.unmount();

  expect(document.body.classList.contains('sidebar-mini')).toEqual(false);
  expect(document.body.classList.contains('sidebar-collapse')).toEqual(false);
  expect(document.body.classList.contains('skin-blue')).toEqual(false);
  expect(document.body.classList.contains('layout-boxed')).toEqual(false);
});
