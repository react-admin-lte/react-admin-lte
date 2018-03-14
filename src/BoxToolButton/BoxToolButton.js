import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxToolButton = ({
  children,
  className: classNameProp,
  component,
  type,
  ...other
}) => {
  const className = classNames({
    'box': true,
    'btn-box-tool': true
  }, classNameProp);

  let Component = component;

  if (!Component) {
    if (other.href) {
      Component = 'a';
    } else {
      Component = 'button';
    }
  }

  const buttonProps = {};

  if (Component === 'button') {
    buttonProps.type = type || 'button';
  }

  return (
    <Component className={className} {...buttonProps} {...other}>
      {children}
    </Component>
  );
};

BoxToolButton.propTypes = {
  /**
   * The content of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * The default value is a `button`.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * @ignore
   */
  type: PropTypes.string
};

export default BoxToolButton;
