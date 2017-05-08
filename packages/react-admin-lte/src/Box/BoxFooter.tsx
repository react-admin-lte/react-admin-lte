import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';

export interface Props {
  className?: string;
};

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const BoxFooter = (({ className, children }) => {
  const classes = {
    'box-footer': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
}) as React.StatelessComponent<Props>;

BoxFooter.propTypes = propTypes;

export default BoxFooter;
