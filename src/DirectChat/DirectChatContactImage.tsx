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

const DirectChatContactImage: React.StatelessComponent<Props> = ({
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

