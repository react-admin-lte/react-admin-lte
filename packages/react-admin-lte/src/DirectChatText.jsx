import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const DirectChatText = ({
  children,
  className,
}) =>
  <div className={classNames(className, { 'direct-chat-text': true })}>
    {children}
  </div>;

DirectChatText.propTypes = propTypes;

export default DirectChatText;
