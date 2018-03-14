import * as React from 'react';
import { PropTypes } from '..';

export interface LabelProps {
  backgroundColor: PropTypes.BackgroundColor;
}

declare const Label: React.ComponentType<LabelProps>;

export default Label;
