import React from 'react';
import classNames from 'classnames';

const propTypes = {
  text: React.PropTypes.string,
  className: React.PropTypes.string,
};

const BoxTitle = ({ text }) => {
  const classes = {
    "box-title": true,
  }

  return (
    <h3 className={classNames(className, classes)}>{text}</h3>
  );
};

BoxTitle.propTypes = propTypes;

export default BoxTitle;
