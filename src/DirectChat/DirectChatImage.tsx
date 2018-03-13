import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
  src?: string;
  alt?: string;
};

const propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

const DirectChatImage: React.StatelessComponent<Props> = ({
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
