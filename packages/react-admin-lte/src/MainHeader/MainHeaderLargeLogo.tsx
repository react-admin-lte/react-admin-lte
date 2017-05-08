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

const MainHeaderLargeLogo: React.StatelessComponent<Props> = ({
  children,
  className,
}) => {
  const classes = {
    'logo-lg': true,
  };

  return (
    <span className={classNames(className, classes)}>{children}</span>
  );
};

MainHeaderLargeLogo.propTypes = propTypes;

export default MainHeaderLargeLogo;
