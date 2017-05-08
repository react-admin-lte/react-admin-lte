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

const MainSidebarUserPanelInfo: React.StatelessComponent<Props> = ({
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
