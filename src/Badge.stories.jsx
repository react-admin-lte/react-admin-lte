import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Badge from './Badge';

storiesOf('Badge', module)
  .addDecorator(story =>
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: 400,
      }}
    >{story()}</div>
  )
  .add('default', () => (
    <Badge>14</Badge>
  ))
  .add('with background color', () => (
    <Badge background="red">18</Badge>
  ));
