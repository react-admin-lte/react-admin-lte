import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

const DirectChatImage = ({
  className,
  src,
  alt,
}) =>
  <img
    alt={alt}
    className={classNames(className, { 'direct-chat-img': true })}
    src={src}
  />;

DirectChatImage.propTypes = propTypes;

export default DirectChatImage;
