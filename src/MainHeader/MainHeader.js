import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MainHeader = ({
  children,
  className: classNameProp,
  component: Component,
  ...other
}) => {
  const className = classNames({
    'main-header': true
  }, classNameProp);

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  );
};

MainHeader.propTypes = {
  /**
   * The contents of the main footer.
   */
  children: PropTypes.node.isRequired,
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

MainHeader.defaultProps = {
  component: 'header'
};

export default MainHeader;
