import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
  name?: string;
  right?: boolean;
  timestamp?: string;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  right: PropTypes.bool,
  timestamp: PropTypes.string,
};

const defaultProps = {
  right: false,
};

const DirectChatMessage: React.StatelessComponent<Props> = ({
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
