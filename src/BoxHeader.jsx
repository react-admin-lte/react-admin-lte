import React from 'react';
import classNames from 'classnames';

import BoxTools from './BoxTools';
import BoxTitle from './BoxTitle';
import BoxUserBlock from './BoxUserBlock';

const propTypes = {
  border: React.PropTypes.bool,
};

const defaultProps = {
  border: false,
};

const BoxHeader = ({
  className,
  children,
  border,
}) => {
  const classes = {
    'box-header': true,
    'with-border': border,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

BoxHeader.Tools = BoxTools;
BoxHeader.Title = BoxTitle;
BoxHeader.UserBlock = BoxUserBlock;

export default BoxHeader;
