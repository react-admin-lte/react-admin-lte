import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
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
