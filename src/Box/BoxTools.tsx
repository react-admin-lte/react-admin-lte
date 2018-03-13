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

const BoxTools: React.StatelessComponent<Props> = ({ className, children }) => {
  const classes = {
    'box-tools': true,
  };

  return (
    <div className={classNames(className, classes)}>
      {children}
    </div>
  );
};

BoxTools.propTypes = propTypes;

export default BoxTools;
