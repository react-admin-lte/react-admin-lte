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

const DirectChatText: React.StatelessComponent<Props> = ({
  children,
  className,
}) =>
  <div className={classNames(className, { 'direct-chat-text': true })}>
    {children}
  </div>;

DirectChatText.propTypes = propTypes;

export default DirectChatText;
