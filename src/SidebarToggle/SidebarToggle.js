import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarToggle = ({
  children,
  className: classNameProp,
  component: Component,
  onClick,
  ...other
}, context) => {
  const className = classNames({
    'sidebar-toggle': true
  }, classNameProp);

  let handleClick;

  if (onClick) {
    handleClick = onClick;
  } else if (context &&
      context.$adminlte_layout &&
      context.$adminlte_layout.onToggle ) {
    handleClick = (e) => { context.$adminlte_layout.onToggle(e) };
  }

  return (
    <Component
      className={className}
      onClick={handleClick}
      {...other}
    >
      {children}
    </Component>
  );
};

SidebarToggle.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  onClick: PropTypes.func
};

SidebarToggle.defaultProps = {
  component: 'a'
};

SidebarToggle.contextTypes = {
  $adminlte_layout: PropTypes.shape({
    toggleMainSidebar: PropTypes.func
  })
};

export default SidebarToggle;
