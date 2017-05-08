import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const DirectChatMessageList: React.StatelessComponent<Props> = ({
  children,
  className,
}) =>
  <div className={classNames(className, { 'direct-chat-messages': true })}>
    {children}
  </div>;

DirectChatMessageList.propTypes = propTypes;

export default DirectChatMessageList;
