import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const BoxTitle = ({ children, className }) => {
  const classes = {
    "box-title": true,
  }

  return (
    <h3 className={classNames(className, classes)}>{children}</h3>
  );
};

BoxTitle.propTypes = propTypes;

export default BoxTitle;
