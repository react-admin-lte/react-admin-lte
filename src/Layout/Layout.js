import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mutuallyExclusiveTrueProps } from 'airbnb-prop-types';
import warning from 'warning';

class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sidebarCollapsed: props.sidebarCollapsed
    };
  }
  
  getChildContext() {
    return {
      $adminlte_layout: {
        toggleMainSidebar: () => {
          this.setState((state) => {
            return {
              sidebarCollapsed: !state.sidebarCollapsed
            };
          });
        }
      }
    };
  }

  componentWillReceiveProps(nextProps, props) {
    if (props.sidebarCollapsed !== nextProps.sidebarCollapsed) {
      this.setState({
        sidebarCollapsed: nextProps.sidebarCollapsed
      });
    }
  }

  render() {
    const {
      boxed,
      children,
      className: classNameProp,
      fixed,
      miniSidebar,
      sidebarCollapsed: _,
      topNav,
      ...other
    } = this.props;
    
    const { sidebarCollapsed } = this.state;

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
};

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
   * Displays fixed header and sidebar.
   */
  fixed: mutuallyExclusiveTrueProps('boxed', 'fixed'),
  /**
   * When collapsed, sidebar will show icons only.
   */
  miniSidebar: PropTypes.bool,
  /**
   * Displays sidebar as collapsed.
   */
  sidebarCollapsed: PropTypes.bool,
  /**
   * Removes sidebar and puts navbar at top.
   */
  topNav: PropTypes.bool
};

Layout.childContextTypes = {
  $adminlte_layout: PropTypes.shape({
    toggleMainSidebar: PropTypes.func
  })
};

export default Layout;
