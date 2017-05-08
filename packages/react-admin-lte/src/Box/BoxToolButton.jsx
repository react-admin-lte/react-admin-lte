import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button, 'box-tool');

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const BoxToolButton = ({
  children,
  className,
  onClick,
}) =>
  <Button
    bsStyle="box-tool"
    className={className}
    onClick={onClick}
  >
    {children}
  </Button>;

BoxToolButton.propTypes = propTypes;

export default BoxToolButton;
