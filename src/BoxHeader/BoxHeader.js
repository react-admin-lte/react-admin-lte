import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxHeader = ({
  border,
  children,
  className: classNameProp,
  tools: toolsProp,
  ...other
}) => {
  const className = classNames({
    'box-header': true,
    'with-border': border
  }, classNameProp);

  const tools = toolsProp
    ? typeof toolsProp === 'function'
      ? toolsProp({ className: 'box-tools pull-right' })
      : <div className="box-tools pull-right">{toolsProp}</div>
    : null;

  return (
    <div className={className} {...other}>
      {children}
      {tools}
    </div>
  );
};

BoxHeader.propTypes = {
  /**
   * If `true`, header will have a bottom border.
   */
  border: PropTypes.bool,
  /**
   * The contents of the component.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Box tools to be placed on right side of header. To customize pass a
   * function that will be used to render the tools container.
   */
  tools: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

BoxHeader.defaultProps = {
  border: false
};

export default BoxHeader;
