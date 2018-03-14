import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxFooter = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'box-footer': true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

BoxFooter.propTypes = {
  /**
   * The contents of the box footer.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default BoxFooter;
