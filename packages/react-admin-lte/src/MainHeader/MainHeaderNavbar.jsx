import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
