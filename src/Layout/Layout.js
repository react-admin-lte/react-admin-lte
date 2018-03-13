import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mutuallyExclusiveTrueProps } from 'airbnb-prop-types';
import warning from 'warning';

const Layout = ({
  boxed,
  children,
  className: classNameProp,
  fixed,
  miniSidebar,
  sidebarColapsed,
  topNav,
  ...other
}) => {
  warning(
    !(boxed === true && fixed === true),
    'The boxed and fixed properties should not be supplied at the same time.'
  );
  
  const className = classNames({
    fixed: fixed,
    'layout-boxed': boxed,
    'layout-top-nav': topNav,
    'sidebar-collapse': sidebarColapsed,
    'sidebar-mini': miniSidebar
  }, classNameProp);
  
  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
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

export default Layout;
