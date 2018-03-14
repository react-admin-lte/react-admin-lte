import * as React from 'react';

export interface BoxToolButtonProps {
  component?: React.ReactType<BoxToolButtonProps>;
  type?: string;
}

declare const BoxToolButton: React.ComponentType<BoxToolButtonProps>;

export default BoxToolButton;
