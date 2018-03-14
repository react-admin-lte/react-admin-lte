import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Logo = ({
  className: classNameProp,
  component: Component,
  large,
  mini,
  ...other
}) => {
  const className = classNames({
    logo: true
  }, classNameProp);

  return (
    <Component className={className} {...other}>
      <span className="logo-mini">{mini}</span>
      <span className="logo-lg">{large}</span>
    </Component>
  );
};

Logo.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The logo to display when mini sidebar is collapsed.
   */
  mini: PropTypes.node,
  /**
   * The logo to display when sidebar is expanded.
   */
  large: PropTypes.node
};

Logo.defaultProps = {
  component: 'a'
};

export default Logo;
