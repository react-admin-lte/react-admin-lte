import * as React from 'react';

export interface BoxHeaderProps {
  border?: boolean;
  tools?: ((props: { className: string; }) => React.ReactNode) | React.ReactNode;
}

declare const BoxHeader: React.ComponentType<BoxHeaderProps>;

export default BoxHeader;
