import * as PropTypes from 'prop-types';
import * as React from 'react';

import MainSidebarUserPanel from './MainSidebarUserPanel';
import MainSidebarMenu from './MainSidebarMenu';

export interface Props {
  collapsed?: boolean;
};

const propTypes = {
  children: PropTypes.node,
  collapsed: PropTypes.bool,
};

const defaultProps = {
  collapsed: false,
};

const contextTypes = {
  $adminlte_layout: PropTypes.shape({
    setMainSidebarCollapsed: PropTypes.func,
  }),
};

class MainSidebar extends React.Component<Props, void> {
  constructor(props, context) {
    super(props, context);
    context.$adminlte_layout.setMainSidebarCollapsed(this.props.collapsed);
  }

  static propTypes = propTypes;
  static defaultProps = defaultProps;
  static contextTypes = contextTypes;

  static UserPanel: typeof MainSidebarUserPanel;
  static Menu: typeof MainSidebarMenu;

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

export default MainSidebar;
