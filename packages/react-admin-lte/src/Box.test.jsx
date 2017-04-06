import React from 'react';
import { mount } from 'enzyme';
import Box from './Box';

class ToggleCollapse extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      collapse: context.$adminlte_box.onCollapseToggle,
    };
  }

  componentDidMount() {
    this.state.collapse();
  }

  static contextTypes = {
    $adminlte_box: React.PropTypes.shape({
      onCollapseToggle: React.PropTypes.func,
    }),
  }

  render() {
    return null;
  }
}

test('Collapses on toggle', () => {
  const wrapper = mount(<Box><ToggleCollapse /></Box>);
  expect(wrapper.hasClass('collapsed-box')).toEqual(true);
});

test('Expands on toggle', () => {
  const wrapper = mount(<Box collapsed><ToggleCollapse /></Box>);
  expect(wrapper.hasClass('collapsed-box')).toEqual(false);
});

class Remove extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      remove: context.$adminlte_box.onRemove,
    };
  }

  componentDidMount() {
    this.state.remove();
  }

  static contextTypes = {
    $adminlte_box: React.PropTypes.shape({
      onRemove: React.PropTypes.func,
    }),
  }

  render() {
    return null;
  }
}

test('Render null when removed', () => {
  const wrapper = mount(<Box><Remove /></Box>);
  expect(wrapper.html()).toEqual(null);
});
