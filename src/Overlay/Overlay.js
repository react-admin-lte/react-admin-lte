import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Overlay = ({
  children,
  className: classNameProp,
  dark,
  disableWrapper,
  isOverlay: _,
  ...other
}) => {
  if (disableWrapper) {
    return (
      <div
        className={classNames({ overlay: true, dark }, classNameProp)}
        {...other}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        className={classNames({ 'overlay-wrapper': true }, classNameProp)}
        {...other}
      >
        <div className={classNames({ overlay: true, dark })}>
          {children}
        </div>
      </div>
    );
  }
};

Overlay.propTypes = {
  /**
   * The contents of the component.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the overlay will have a dark background.
   */
  dark: PropTypes.bool,
  /**
   * @ignore
   */
  disableWrapper: PropTypes.bool,
  /**
   * @ignore
   */
  isOverlay: PropTypes.bool
};

Overlay.defaultProps = {
  dark: false,
  disableWrapper: false,
  isOverlay: true
};

export default Overlay;
