import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxBody = ({
  children,
  className: classNameProp,
  noPadding,
  ...other
}) => {
  const className = classNames({
    'box-body': true,
    'no-padding': noPadding
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

BoxBody.propTypes = {
  /**
   * The contents of the box body.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, padding will be removed from the box body.
   */
  noPadding: PropTypes.bool
};

BoxBody.defaultProps = {
  noPadding: false
};

export default BoxBody;
