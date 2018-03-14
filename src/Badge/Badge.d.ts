import * as React from 'react';
import { PropTypes } from '..';

export interface BadgeProps {
  backgroundColor: PropTypes.BackgroundColor;
}

declare const Badge: React.ComponentType<BadgeProps>;

export default Badge;
