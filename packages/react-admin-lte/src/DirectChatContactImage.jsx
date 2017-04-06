import React from 'react';
import classNames from 'classnames';

const propTypes = {
  className: React.PropTypes.string,
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
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

