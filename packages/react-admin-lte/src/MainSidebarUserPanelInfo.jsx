import React from 'react';
import classNames from 'classnames';

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
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
