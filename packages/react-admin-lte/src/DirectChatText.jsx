import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
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
