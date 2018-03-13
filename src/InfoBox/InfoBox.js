import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const InfoBox = ({
  backgroundColor,
  backgroundPlacement,
  children,
  className: classNameProp,
  icon,
  number,
  progress,
  progressDescription,
  text,
  ...other
}) => {
  const boxClassName = classNames({
    'info-box': true,
    [`bg-${backgroundColor}`]: backgroundPlacement === 'box'
  }, classNameProp);

  const iconClassName = classNames({
    'info-box-icon': true,
    [`bg-${backgroundColor}`]: backgroundPlacement === 'icon'
  });

  return (
    <div className={boxClassName} {...other}>
      <span className={iconClassName}>{icon}</span>
      <div className="info-box-content">
        <span className="info-box-text">{text}</span>
        <span className="info-box-number">{number}</span>
        {children}
      </div>
    </div>
  );
};

InfoBox.propTypes = {
  /**
   * Color of background.
   */
  backgroundColor: PropTypes.oneOf(['aqua', 'green', 'yellow',  'red']).isRequired,
  /**
   * Whether the `backgroundColor` should be applied to only the `icon` or the whole `box`.
   */
  backgroundPlacement: PropTypes.oneOf(['box', 'icon']).isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * An icon to be displayed on the left side of the `InfoBox`.
   */
  icon: PropTypes.node.isRequired,
  /**
   * The info to be displayed in `InfoBox`.
   */
  number: PropTypes.node.isRequired,
  /**
   * The title to be displayed in `InfoBox`.
   */
  text: PropTypes.node.isRequired
};

export default InfoBox;
