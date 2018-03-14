import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RegistrationBox = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'register-box': true
  }, classNameProp);

  return (
    <div
      className={className}
      style={{
        marginTop: '0',
        marginBottom: '0',
        paddingTop: '26.5vh',
        paddingBottom: '26.5vh'
      }}
      {...other}
    >
      {children}
    </div>
  );
};

RegistrationBox.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default RegistrationBox;
