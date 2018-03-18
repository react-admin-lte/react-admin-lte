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
      context.$adminlte_theme &&
      context.$adminlte_theme.onChange ) {
    handleClick = (e) => { context.$adminlte_theme.onChange(e) };
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
  $adminlte_theme: PropTypes.shape({
    onChange: PropTypes.func
  })
};

export default SidebarToggle;
