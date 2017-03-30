import React from 'react';
import classNames from 'classnames';
import { Label as BsLabel } from 'react-bootstrap';

const propTypes = {
  background: React.PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

const Label = ({
  background,
  className,
  children,
}) => {
  const classes = {
    label: true,
  };

  if (background) {
    classes[`bg-${background}`] = true;
  }

  return (
    <BsLabel bsClass={classNames(className, classes)}>{children}</BsLabel>
  );
};

Label.propTypes = propTypes;

export default Label;
