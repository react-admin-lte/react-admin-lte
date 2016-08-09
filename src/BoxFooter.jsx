import React from 'react';
import classNames from 'classnames';

const propTypes = {
};

const BoxFooter = ({ className, children }) => {
  const classes = {
    'box-footer': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

BoxFooter.propTypes = propTypes;

export default BoxFooter;
