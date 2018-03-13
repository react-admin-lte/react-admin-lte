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

const MainFooter: React.StatelessComponent<Props> = ({
  children,
  className,
}) => {
  const classes = {
    'main-footer': true,
  };

  return (
    <footer className={classNames(className, classes)}>
      {children}
    </footer>
  );
};

MainFooter.propTypes = propTypes;

export default MainFooter;
