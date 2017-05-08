import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
  name?: string;
  date?: string;
};

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
  date: PropTypes.string,
};

const DirectChatContactInfo: React.StatelessComponent<Props> = ({
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
