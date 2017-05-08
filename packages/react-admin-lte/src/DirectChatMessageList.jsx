import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
