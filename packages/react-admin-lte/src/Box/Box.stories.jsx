import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Box } from '.';

const body = <Box.Body>The body of the box</Box.Body>;

storiesOf('Box', module)
  .addDecorator(story =>
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        width: 400,
      }}
    >
      {story()}
    </div>
  )
  .add('default', () => (
    <Box>
      <Box.Header>
        <Box.Title>Default Box Example</Box.Title>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('with style', () => (
    <Box style="primary">
      <Box.Header>
        <Box.Title>Primary Box Example</Box.Title>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('solid with default style', () => (
    <Box solid style="default">
      <Box.Header>
        <Box.Title>Solid Box Example</Box.Title>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('loading', () => (
    <Box loading>
      <Box.Header>
        <Box.Title>Loading State</Box.Title>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('bordered header', () => (
    <Box>
      <Box.Header border>
        <Box.Title>Bordered Box Example</Box.Title>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('footer', () => (
    <Box>
      <Box.Header>
        <Box.Title>Footer</Box.Title>
      </Box.Header>
      {body}
      <Box.Footer>The footer of the box</Box.Footer>
    </Box>
  ))
  .add('body without padding', () => (
    <Box>
      <Box.Header>
        <Box.Title>No padding</Box.Title>
      </Box.Header>
      <Box.Body noPadding>
        The body of the box
      </Box.Body>
    </Box>
  ))
  .add('exandable', () => (
    <Box collapsed>
      <Box.Header>
        <Box.Title>Collapsable</Box.Title>
        <Box.Tools>
          <Box.CollapsedToggleButton />
        </Box.Tools>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('collapsable', () => (
    <Box>
      <Box.Header>
        <Box.Title>Collapsable</Box.Title>
        <Box.Tools>
          <Box.CollapsedToggleButton />
        </Box.Tools>
      </Box.Header>
      {body}
    </Box>
  ))
  .add('removable', () => (
    <Box>
      <Box.Header>
        <Box.Title>Removable</Box.Title>
        <Box.Tools>
          <Box.RemoveButton />
        </Box.Tools>
      </Box.Header>
      {body}
    </Box>
  ));
