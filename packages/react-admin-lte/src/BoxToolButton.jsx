import React from 'react';
import { Button } from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';

addStyle(Button, 'box-tool');

const propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
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
