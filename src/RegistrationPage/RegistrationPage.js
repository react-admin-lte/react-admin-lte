import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const RegistrationPage = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'registration-page': true
  }, classNameProp);

  return (
    <div className={className} style={{ minHeight: '100vh' }} {...other}>
      {children}
    </div>
  );
};

RegistrationPage.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default RegistrationPage;
