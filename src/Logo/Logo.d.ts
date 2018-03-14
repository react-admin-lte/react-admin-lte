import * as React from 'react';

export interface LogoProps {
  component?: React.ReactType<LogoProps>;
  large?: React.ReactNode;
  mini?: React.ReactNode;
}

declare const Logo: React.ComponentType<LogoProps>;

export default Logo;
