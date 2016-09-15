import React from 'react';
import classNames from 'classnames';

const propTypes = {
  padding: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

const defaultProps = {
  padding: true,
};

const BoxBody = ({
  className,
  children,
  padding
}) => {
  const classes = {
    'box-body': true,
    'no-padding': !padding,
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
