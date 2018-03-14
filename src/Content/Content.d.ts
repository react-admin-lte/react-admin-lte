import * as React from 'react';

export interface ContentProps {
  component?: React.ReactType<ContentProps>;
}

declare const Content: React.ComponentType<ContentProps>;

export default Content;
