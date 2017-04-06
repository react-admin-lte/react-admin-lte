import React from 'react';

import MainSidebarUserPanel from './MainSidebarUserPanel';
import MainSidebarMenu from './MainSidebarMenu';

const propTypes = {
  children: React.PropTypes.node,
  collapsed: React.PropTypes.bool,
};

const defaultProps = {
  collapsed: false,
};

const contextTypes = {
  $adminlte_layout: React.PropTypes.shape({
    setMainSidebarCollapsed: React.PropTypes.func,
  }),
};

class MainSidebar extends React.Component {
  constructor(props, context) {
    super(props, context);
    context.$adminlte_layout.setMainSidebarCollapsed(this.props.collapsed);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (this.props.collapsed !== nextProps.collapsed) {
      nextContext.$adminlte_layout.setMainSidebarCollapsed(nextProps.collapsed);
    }
  }

  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          {this.props.children}
        </section>
      </aside>
    );
  }
}

MainSidebar.UserPanel = MainSidebarUserPanel;
MainSidebar.Menu = MainSidebarMenu;

MainSidebar.propTypes = propTypes;
MainSidebar.defaultProps = defaultProps;
MainSidebar.contextTypes = contextTypes;

export default MainSidebar;
