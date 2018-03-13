import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Wrapper = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    wrapper: true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  /**
   * The content of the wrapper.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default Wrapper;
