import * as React from 'react';

export interface BoxToolButtonProps {
  component?: React.ReactType<BoxToolButtonProps>;
  href?: string;
  type?: string;
}

declare const BoxToolButton: React.ComponentType<BoxToolButtonProps>;

export default BoxToolButton;
