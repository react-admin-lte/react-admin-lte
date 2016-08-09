import React from 'react';
import classNames from 'classnames';

import BoxTools from './BoxTools';

const propTypes = {
  title: React.PropTypes.string.isRequired,
  border: React.PropTypes.bool,
};

const defaultProps = {
  border: false,
};

const BoxHeader = ({
  className,
  children,
  title,
  border,
}) => {
  const classes = {
    'box-header': true,
    'with-border': border,
  };

  return (
    <div className={classNames(className, classes)}>
      <h3 className="box-title">{title}</h3>
      {children}
    </div>
  );
};

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

BoxHeader.Tools = BoxTools;

export default BoxHeader;
