import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
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
