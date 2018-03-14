import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxTools = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'box-tools': true,
    'pull-right': true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

BoxTools.propTypes = {
  /**
   * The contents of the box tools.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default BoxTools;
