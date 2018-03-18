import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Content = ({
  breadcrumb,
  children,
  className: classNameProp,
  component: Component,
  headerComponent: HeaderComponent,
  subtitle,
  title,
  ...other
}) => {
  const className = classNames({
    'content-wrapper': true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      <HeaderComponent className="content-header">
        <h1>
          {title}
          <small>{subtitle}</small>
        </h1>
        {breadcrumb}
      </HeaderComponent>
      <Component className="content">
        {children}
      </Component>
    </div>
  );
};

Content.propTypes = {
  /**
   * Breadcrumb to be placed on the right side of the content header.
   */
  breadcrumb: PropTypes.node,
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
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  headerComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /**
   * Subtitle of the content.
   */
  subtitle: PropTypes.node,
  /**
   * Title of the content.
   */
  title: PropTypes.node
};

Content.defaultProps = {
  component: 'section',
  headerComponent: 'section'
};

export default Content;
