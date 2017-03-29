import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const MainFooter = ({
  children,
  className,
}) => {
  const classes = {
    'main-footer': true,
  };

  return (
    <footer className={classNames(className, classes)}>
      {children}
    </footer>
  );
};

MainFooter.propTypes = propTypes;

export default MainFooter;
