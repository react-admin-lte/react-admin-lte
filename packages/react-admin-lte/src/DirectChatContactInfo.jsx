import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  name: React.PropTypes.string,
  date: React.PropTypes.string,
};

const DirectChatContactInfo = ({
  children,
  className,
  name,
  date,
}) => {
  const classes = {
    'contacts-list-info':  true,
  };

  return (
    <div className={classNames(className, classes)}>
      <div className="contacts-list-name">
        {name}
        <div className="contacts-list-date pull-right">{date}</div>
      </div>
      <div className="contacts-list-msg">{children}</div>
    </div>
  );
};

DirectChatContactInfo.propTypes = propTypes;

export default DirectChatContactInfo;
