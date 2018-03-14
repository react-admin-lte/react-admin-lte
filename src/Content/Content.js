import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = ({
  children,
  className: classNameProp,
  component: Component,
  ...other
}) => {
  const className = classNames({
    content: true
  }, classNameProp);

  return (
    <Component className={className} {...other}>
      {children}
    </Component>
  );
};

Content.propTypes = {
  /**
   * The content of the content.
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

Content.defaultProps = {
  component: 'section'
};

export default Content;
