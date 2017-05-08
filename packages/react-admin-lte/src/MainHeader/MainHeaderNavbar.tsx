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

const MainHeaderNavbar: React.StatelessComponent<Props> = ({
  children,
  className,
}) => {
  const classes = {
    navbar: true,
    'navbar-static-top': true,
  };

  return (
    <nav className={classNames(className, classes)}>
      {children}
    </nav>
  );
};

MainHeaderNavbar.propTypes = propTypes;

export default MainHeaderNavbar;
