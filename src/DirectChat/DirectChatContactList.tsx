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

const DirectChatContactList: React.StatelessComponent<Props> = ({
  children,
  className,
}) => {
  const classes = {
    'direct-chat-contacts': true,
  };

  return (
    <div className={classNames(className, classes)}>
      <ul className="contacts-list">
        {children}
      </ul>
    </div>
  );
};

DirectChatContactList.propTypes = propTypes;

export default DirectChatContactList;
