import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const BoxTools = ({ className, children }) => {
  const classes = {
    'box-tools': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

BoxTools.propTypes = propTypes;

export default BoxTools;
