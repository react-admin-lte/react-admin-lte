import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BoxHeader = ({
  border,
  children,
  className: classNameProp,
  title: titleProp,
  ...other
}) => {
  const className = classNames({
    'box-header': true,
    'with-border': border
  }, classNameProp);

  const title = titleProp
    ? typeof titleProp === 'function'
      ? titleProp({ className: 'box-title '})
      : <h3 className="box-title">{titleProp}</h3>
    : null;

  const tools = React.Children.count(children) > 0
    ? <div className="box-tools pull-right">{children}</div>
    : null;

  return (
    <div className={className} {...other}>
      {title}
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
   * Box tools to be placed on right side of header.
   */
  children: PropTypes.node,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The title of the header. If a node it will be rendered inside a `h3`
   * element. To customize pass a function that will be used to render the
   * title.
   */
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

BoxHeader.defaultProps = {
  border: false
};

export default BoxHeader;
