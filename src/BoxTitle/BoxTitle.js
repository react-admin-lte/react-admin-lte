import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxTitle = ({
  children,
  className: classNameProp,
  component: Component,
  ...other
}) => {
  const className = classNames({
    'box-title': true
  }, classNameProp);

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  );
};

BoxTitle.propTypes = {
  /**
   * The contents of the box title.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

BoxTitle.defaultProps = {
  component: 'h3'
};

export default BoxTitle;
