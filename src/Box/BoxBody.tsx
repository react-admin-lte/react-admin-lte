import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  noPadding?: boolean;
  className?: string;
};

const propTypes = {
  noPadding: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  noPadding: false,
};

const BoxBody = (({
  className,
  children,
  noPadding,
}) => {
  const classes = {
    'box-body': true,
    'no-padding': noPadding,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
}) as React.StatelessComponent<Props>;

BoxBody.propTypes = propTypes;
BoxBody.defaultProps = defaultProps;

export default BoxBody;
