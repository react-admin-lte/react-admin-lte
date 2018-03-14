import * as React from 'react';

export interface SidebarToggleProps {
  component?: React.ReactType<SidebarToggleProps>;
  onClick?: React.MouseEventHandler<any>;
}

declare const SidebarToggle: React.ComponentType<SidebarToggleProps>;

export default SidebarToggle;
