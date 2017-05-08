import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

import BoxUserBlock from './BoxUserBlock';

export interface Props {
  border?: boolean;
  className?: string;
};

export interface BoxHeaderComponent extends React.StatelessComponent<Props> {
  UserBlock: typeof BoxUserBlock;
};

const propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  border: false,
};

const BoxHeader = (({
  className,
  children,
  border
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
}) as BoxHeaderComponent;

BoxHeader.propTypes = propTypes;
BoxHeader.defaultProps = defaultProps;

BoxHeader.UserBlock = BoxUserBlock;

export default BoxHeader;
