import * as React from 'react';

export interface ContentHeaderProps {
  component?: React.ReactType<ContentHeaderProps>;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
}

declare const ContentHeader: React.ComponentType<ContentHeaderProps>;

export default ContentHeader;
