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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  mini: PropTypes.node,
  large: PropTypes.node
};

Logo.defaultProps = {
  component: 'a'
};

export default Logo;
