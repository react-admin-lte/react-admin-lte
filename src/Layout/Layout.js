import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mutuallyExclusiveTrueProps } from 'airbnb-prop-types';
import warning from 'warning';
import uncontrollable from 'uncontrollable';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  getChildContext() {
    return {
      $adminlte_layout: {
        onToggle: this.handleToggle
      }
    };
  }

  handleToggle(e) {
    this.props.onToggle(!this.props.sidebarCollapsed, e);
  };

  render() {
    const {
      boxed,
      children,
      className: classNameProp,
      fixed,
      miniSidebar,
      onSidebarCollapsedToggle: _,
      sidebarCollapsed,
      topNav,
      ...other
    } = this.props;

    warning(
      !(boxed === true && fixed === true),
      'The boxed and fixed properties should not be supplied at the same time.'
    );

    const className = classNames({
      fixed: fixed,
      'layout-boxed': boxed,
      'layout-top-nav': topNav,
      'sidebar-collapse': sidebarCollapsed,
      'sidebar-mini': miniSidebar
    }, classNameProp);

    return (
      <div className={className} {...other}>
        {children}
      </div>
    );
  }
}

Layout.propTypes = {
  /**
   * Layout will only be stretched to 1250px.
   */
  boxed: mutuallyExclusiveTrueProps('boxed', 'fixed'),
  /**
   * The content of the layout.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * It `true`, collapsed the sidebar by default.
   */
  defaultSidebarCollapsed: PropTypes.bool,
  /**
   * Displays fixed header and sidebar.
   */
  fixed: mutuallyExclusiveTrueProps('boxed', 'fixed'),
  /**
   * When collapsed, sidebar will show icons only.
   */
  miniSidebar: PropTypes.bool,
  /**
   * Callback fired when the sidebar is toggled.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} collapsed The 'collapsed` state of the sidebar
   */
  onToggle: PropTypes.func,
  /**
   * If `true`, collapses the sidebar. Setting this prop enables control of
   * the Layout.
   */
  sidebarCollapsed: PropTypes.bool,
  /**
   * Removes sidebar and puts navbar at top.
   */
  topNav: PropTypes.bool
};

Layout.childContextTypes = {
  $adminlte_layout: PropTypes.shape({
    onToggle: PropTypes.func
  })
};

export default uncontrollable(Layout, {
  sidebarCollapsed: 'onToggle'
});

