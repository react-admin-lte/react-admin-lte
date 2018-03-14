import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RegistrationBoxBody = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'registration-box-body': true
  }, classNameProp);

  return (
    <div
      className={className}
      {...other}
    >
      {children}
    </div>
  );
};

RegistrationBoxBody.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default RegistrationBoxBody;
