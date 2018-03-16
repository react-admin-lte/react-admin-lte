import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({
  children: childrenProp,
  className: classNameProp,
  collapsed,
  solid,
  style,
  ...other
}) => {
  const className = classNames({
    'box': true,
    'collapsed-box': collapsed,
    [`box-${style}`]: style,
    'box-solid': solid
  }, classNameProp);

  const children = React.Children.map(childrenProp, child => {
    if (!React.isValidElement(child)) {
      return null;
    }

    return child.props.isOverlay
      ? React.cloneElement(child, { disableWrapper: true })
      : child;
  });

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

Box.propTypes = {
  /**
   * The content of the box.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, collapses the box, otherwise expands it.
   */
  collapsed: PropTypes.bool,
  /**
   * Displays box with solid colored header.
   */
  solid: PropTypes.bool,
  /**
   * Contextual style of the box.
   */
  style: PropTypes.oneOf(['default', 'primary', 'success', 'warning', 'danger'])
};

Box.defaultProps = {
  collapsed: false,
  solid: false
};

export default Box;
