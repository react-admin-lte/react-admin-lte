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

const MainSidebarMenuHeader: React.StatelessComponent<Props> = ({
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
