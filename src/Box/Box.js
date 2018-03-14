import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({
  children,
  className: classNameProp,
  collapsed,
  loading,
  loadingIndicator,
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

  const overlay = loading
    ? <div className="overlay">{loadingIndicator}</div>
    : null;

  return (
    <div className={className} {...other}>
      {children}
      {overlay}
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
   * If `true', `loadingIndicator` is overlaid on top of box.
   */
  loading: PropTypes.bool,
  /**
   * To be shown when `loading` is `true`.
   */
  loadingIndicator: PropTypes.node,
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
  loading: false,
  solid: false
};

export default Box;
