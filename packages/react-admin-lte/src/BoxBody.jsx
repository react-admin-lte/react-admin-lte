import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  noPadding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  noPadding: false,
};

const BoxBody = ({
  className,
  children,
  noPadding,
}) => {
  const classes = {
    'box-body': true,
    'no-padding': noPadding,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

BoxBody.propTypes = propTypes;
BoxBody.defaultProps = defaultProps;

export default BoxBody;
