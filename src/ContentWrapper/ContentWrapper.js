import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ContentWrapper = ({
  children,
  className: classNameProp,
  ...other
}) => {
  const className = classNames({
    'content-wrapper': true
  }, classNameProp);

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
};

ContentWrapper.propTypes = {
  /**
   * The content of the content wrapper.
   */
  children: PropTypes.node.isRequired,
  /**
   * @ignore
   */
  className: PropTypes.string
};

export default ContentWrapper;
