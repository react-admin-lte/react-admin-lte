import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
};

const MainSidebarMenuHeader = ({
  children,
  className,
}) => {
  const classes = {
    header: true,
  };

  return (
    <li className={classNames(className, classes)}>
      {children}
    </li>
  );
};

MainSidebarMenuHeader.propTypes = propTypes;

export default MainSidebarMenuHeader;
