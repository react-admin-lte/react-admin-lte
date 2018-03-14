import * as React from 'react';
import { PropTypes } from '..';

export interface InfoBoxProps {
  backgroundColor: PropTypes.BackgroundColor;
  backgroundPlacement: InfoBoxBackgroundPlacement;
  icon: React.ReactNode;
  number: React.ReactNode;
  text: React.ReactNode;
}

export type InfoBoxBackgroundPlacement = 'box' | 'icon';

declare const InfoBox: React.ComponentType<InfoBoxProps>;

export default InfoBox;
