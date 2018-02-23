import * as PropTypes from 'prop-types';
import * as React from 'react';
import { mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Box from './Box';

interface ToggleState {
  collapse: () => void;
};

class ToggleCollapse extends React.Component<{}, ToggleState> {
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
    $adminlte_box: PropTypes.shape({
      onCollapseToggle: PropTypes.func,
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

interface RemoveState {
  remove: () => void;
};

class Remove extends React.Component<{}, RemoveState> {
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
    $adminlte_box: PropTypes.shape({
      onRemove: PropTypes.func,
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

test('Renders default', () => {
  const component = renderer.create(
    <Box />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders with style', () => {
  const component = renderer.create(
    <Box style="primary" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders solid', () => {
  const component = renderer.create(
    <Box solid />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders loading', () => {
  const component = renderer.create(
    <Box loading />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders loading with "spinner" icon', () => {
  const component = renderer.create(
    <Box loading spinner="spinner" />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

test('Renders collapsed', () => {
  const component = renderer.create(
    <Box collapsed />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
