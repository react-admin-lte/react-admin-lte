import * as React from 'react';

export interface ContentProps {
  breadcrumb?: React.ReactNode;
  component?: React.ReactType<ContentProps>;
  headerComponent?: React.ReactType<ContentProps>;
  subtitle?: React.ReactNode;
  title?: React.ReactNode;
}

declare const Content: React.ComponentType<ContentProps>;

export default Content;
