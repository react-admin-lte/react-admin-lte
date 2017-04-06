import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const MainHeaderNavbar = ({
  children,
  className,
}) => {
  const classes = {
    navbar: true,
    'navbar-static-top': true,
  };

  return (
    <nav className={classNames(className, classes)}>
      {children}
    </nav>
  );
};

MainHeaderNavbar.propTypes = propTypes;

export default MainHeaderNavbar;
