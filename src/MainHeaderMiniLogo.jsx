import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const MainHeaderMiniLogo = ({
    children,
    className,
}) => {
  const classes = {
    'logo-mini': true,
  };

  return (
    <span className={classNames(className, classes)}>{children}</span>
  );
};

MainHeaderMiniLogo.propTypes = propTypes;

export default MainHeaderMiniLogo;
