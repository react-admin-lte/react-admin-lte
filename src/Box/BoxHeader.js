import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxHeader = ({
  border,
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'box-header': true,
    'with-border': border
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

BoxHeader.propTypes = {
  /**
   * If `true`, header will have a bottom border.
   */
  border: PropTypes.bool,
  /**
   * The contents of the box header.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

BoxHeader.defaultProps = {
  border: false
};

export default BoxHeader;
