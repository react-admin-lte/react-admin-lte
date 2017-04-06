import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const DirectChatContactList = ({
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
