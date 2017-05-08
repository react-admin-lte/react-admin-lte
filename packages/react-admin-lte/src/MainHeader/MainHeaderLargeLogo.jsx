import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const MainHeaderLargeLogo = ({
  children,
  className,
}) => {
  const classes = {
    'logo-lg': true,
  };

  return (
    <span className={classNames(className, classes)}>{children}</span>
  );
};

MainHeaderLargeLogo.propTypes = propTypes;

export default MainHeaderLargeLogo;
