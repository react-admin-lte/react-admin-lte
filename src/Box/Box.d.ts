import * as React from 'react';

export interface BoxProps {
  collapsed?: boolean;
  solid?: boolean;
  style?: BoxStyle;
}

export type BoxStyle = 'default' | 'primary' | 'success' | 'warning' | 'danger';

declare const Box: React.ComponentType<BoxProps>;

export default Box;
