import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import BoxUserBlock from './BoxUserBlock';

const propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  border: false,
};

const BoxHeader = ({
  className,
  children,
  border
}) => {
  const classes = {
    'box-header': true,
    'with-border': border,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

BoxHeader.UserBlock = BoxUserBlock;

export default BoxHeader;
