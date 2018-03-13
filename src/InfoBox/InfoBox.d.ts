import * as React from 'react';

export interface InfoBoxProps {
  backgroundColor: 'aqua' | 'green' | 'yellow' | 'red';
  backgroundPlacement: InfoBoxBackgroundPlacement;
  icon: React.ReactNode;
  number: React.ReactNode;
  text: React.ReactNode;
}

export type InfoBoxBackgroundPlacement = 'box' | 'icon';

declare const InfoBox: React.ComponentType<InfoBoxProps>;

export default InfoBox;
