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

const MainHeaderMiniLogo: React.StatelessComponent<Props> = ({
    children,
    className,
}) => {
  const classes = {
    'logo-mini': true,
  };

  return (
    <span className={classNames(className, classes)}>{children}</span>
  );
};

MainHeaderMiniLogo.propTypes = propTypes;

export default MainHeaderMiniLogo;
