import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const DirectChatMessageList = ({
  children,
  className,
}) =>
  <div className={classNames(className, { 'direct-chat-messages': true })}>
    {children}
  </div>;

DirectChatMessageList.propTypes = propTypes;

export default DirectChatMessageList;
