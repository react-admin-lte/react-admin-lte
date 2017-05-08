import PropTypes from 'prop-types';
import React from 'react';
import { mount } from 'enzyme';
import Layout from './Layout';
import MainSidebar from './MainSidebar';

test('Layout notified when collapsed value changes', () => {
  let receivedVal = null;

  class LayoutFake extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        collapsed: true,
      };
    }

    static propTypes = {
      children: PropTypes.node,
    }

    static childContextTypes = Layout.childContextTypes;

    getChildContext() {
      return {
        $adminlte_layout: {
          setMainSidebarCollapsed: (val) => receivedVal = val,
        },
      };
    }

    render() {
      return (
        <div>
          <MainSidebar collapsed={this.state.collapsed} />
        </div>
      );
    }
  }

  const wrapper = mount(<LayoutFake />);

  wrapper.setState({
    collapsed: false,
  });

  expect(receivedVal).toEqual(false);

  wrapper.setState({
    collapsed: true,
  });

  expect(receivedVal).toEqual(true);
});
