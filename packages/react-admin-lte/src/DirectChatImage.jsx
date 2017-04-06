import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: React.PropTypes.string,
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
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
