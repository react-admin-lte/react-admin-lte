import * as React from 'react';
import { ProgressBarProps } from 'react-bootstrap/lib/ProgressBar';

export interface InfoBoxProgressBarProps extends ProgressBarProps {
  description: React.ReactNode;
}

declare const InfoBoxProgressBar: React.ComponentType<InfoBoxProgressBarProps>;

export default InfoBoxProgressBar;
