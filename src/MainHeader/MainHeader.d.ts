import * as React from 'react';

export interface MainHeaderProps {
  component?: React.ReactType<MainHeaderProps>;
  largeLogo?: React.ReactNode;
  logoComponent?: ((props: {
    className: string;
    children: React.ReactNode
  }) => React.ReactNode) | React.ReactNode;
  logoHref?: string;
  miniLogo?: React.ReactNode;
  onSidebarCollapseClick?: React.MouseEventHandler<any>;
}

declare const MainHeader: React.ComponentType<MainHeaderProps>;

export default MainHeader;
