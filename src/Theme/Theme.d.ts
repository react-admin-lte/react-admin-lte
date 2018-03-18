import * as React from 'react';

export interface ThemeProps {
  boxed?: boolean;
  defaultSidebarCollapsed?: boolean;
  fixed?: boolean;
  miniSidebar?: boolean;
  onChange?: (collapsed: boolean, event: React.ChangeEvent<{}>) => void,
  sidebarCollapsed?: boolean;
  skinColor?: SkinColor;
  topNav?: boolean;
}

export type SkinColor = 'blue' | 'black' | 'purple' | 'green' | 'red' |
  'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' |
  'red-light' | 'yellow-light';

declare const Theme: React.ComponentType<ThemeProps>;

export default Theme;
