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

const BoxTitle: React.StatelessComponent<Props> = ({ children, className }) => {
  const classes = {
    "box-title": true,
  }

  return (
    <h3 className={classNames(className, classes)}>{children}</h3>
  );
};

BoxTitle.propTypes = propTypes;

export default BoxTitle;
