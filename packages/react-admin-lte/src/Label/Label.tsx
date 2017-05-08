import * as PropTypes from 'prop-types';
import * as React from 'react';
import * as classNames from 'classnames';
import { Label as BsLabel } from 'react-bootstrap';

export interface Props {
  background?: 'light-blue' | 'red' | 'green' | 'yellow';
  className?: string;
};

const propTypes = {
  background: PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
  className: PropTypes.string,
  children: PropTypes.node,
};

const Label: React.StatelessComponent<Props> = ({
  background,
  className,
  children,
}) => {
  const classes = {};

  if (background) {
    classes[`bg-${background}`] = true;
  }

  return (
    <BsLabel className={classNames(className, classes)}>{children}</BsLabel>
  );
};

Label.propTypes = propTypes;

export default Label;
