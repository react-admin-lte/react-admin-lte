import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentHeader = ({
  children,
  className: classNameProp,
  component: Component,
  subtitle,
  title,
  ...other
}) => {
  const className = classNames({
    'content-header': true
  }, classNameProp);

  return (
    <Component className={className} {...other}>
      <h1>
        {title}
        <small>{subtitle}</small>
      </h1>
      {children}
    </Component>
  );
};

ContentHeader.propTypes = {
  /**
   * Used to render a breadcrumb.
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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Subtitle of content.
   */
  subtitle: PropTypes.node,
  /**
   * Title of content.
   */
  title: PropTypes.node
};

ContentHeader.defaultProps = {
  component: 'section'
};

export default ContentHeader;
