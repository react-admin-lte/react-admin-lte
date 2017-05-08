import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Label } from '.';

storiesOf('Label', module)
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
    <Label>old</Label>
  ))
  .add('with background color', () => (
    <Label background="green">new</Label>
  ));
