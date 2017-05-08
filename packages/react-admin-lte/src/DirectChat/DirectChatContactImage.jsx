import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

const DirectChatContactImage = ({
  className,
  src,
  alt,
}) =>
  <img
    alt={alt}
    className={classNames(className, { 'contacts-list-img': true })}
    src={src}
  />;

DirectChatContactImage.propTypes = propTypes;

export default DirectChatContactImage;

