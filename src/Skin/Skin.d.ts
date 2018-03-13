import * as React from 'react';

export interface SkinProps {
  color: SkinColor;
}

export type SkinColor = 'blue' | 'black' | 'purple' | 'green' | 'red' |
  'yellow' | 'blue-light' | 'black-light' | 'purple-light' | 'green-light' |
  'red-light' | 'yellow-light';

declare const Skin: React.ComponentType<SkinProps>;

export default Skin;
