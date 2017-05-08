import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const MainSidebarUserPanelInfo = ({
  children,
  className,
}) => {
  const classes = {
    info: true,
    'pull-left': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

MainSidebarUserPanelInfo.propTypes = propTypes;

export default MainSidebarUserPanelInfo;
