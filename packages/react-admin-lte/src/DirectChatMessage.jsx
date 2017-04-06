import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  right: React.PropTypes.bool,
  timestamp: React.PropTypes.string,
};

const defaultProps = {
  right: false,
};

const DirectChatMessage = ({
  children,
  className,
  name,
  right,
  timestamp,
}) => {
  const classes = {
    'direct-chat-msg': true,
    right,
  };

  return (
    <div className={classNames(className, classes)}>
      <div className="direct-chat-info clearfix">
        <span className="direct-chat-name pull-left">{name}</span>
        <span className="direct-chat-timestamp pull-right">{timestamp}</span>
      </div>
      {children}
    </div>
  );
};

DirectChatMessage.propTypes = propTypes;
DirectChatMessage.defaultProps = defaultProps;

export default DirectChatMessage;
