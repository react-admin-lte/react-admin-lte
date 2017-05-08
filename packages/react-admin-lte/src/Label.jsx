import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { Label as BsLabel } from 'react-bootstrap';

const propTypes = {
  background: PropTypes.oneOf(['light-blue', 'red', 'green', 'yellow']),
  className: PropTypes.string,
  children: PropTypes.node,
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
