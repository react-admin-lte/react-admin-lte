Default box:

    <Box>
      <Box.Header>
        <Box.Title>Default Box Example</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

With style:

    <Box style="primary">
      <Box.Header>
        <Box.Title>Primary Box Example</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Solid with default style:

    <Box solid>
      <Box.Header>
        <Box.Title>Primary Box Example</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Loading:

    <Box loading>
      <Box.Header>
        <Box.Title>Loading State</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Loading with spinner icon of choice:

    <Box loading spinner="spinner">
      <Box.Header>
        <Box.Title>Loading State</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Bordered header:

    <Box>
      <Box.Header border>
        <Box.Title>Primary Box Example</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Footer:

    <Box style="primary">
      <Box.Header>
        <Box.Title>Footer</Box.Title>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
      <Box.Footer>The footer of the box</Box.Footer>
    </Box>

Body without padding:

    <Box>
      <Box.Header>
        <Box.Title>No padding</Box.Title>
      </Box.Header>
      <Box.Body noPadding>The body of the box</Box.Body>
    </Box>

Expandable:

    <Box collapsed>
      <Box.Header>
        <Box.Title>Expandable</Box.Title>
        <Box.Tools>
          <Box.CollapsedToggleButton />
        </Box.Tools>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Collapsible:

    <Box>
      <Box.Header>
        <Box.Title>Collapsible</Box.Title>
        <Box.Tools>
          <Box.CollapsedToggleButton />
        </Box.Tools>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>

Removable:

    <Box>
      <Box.Header>
        <Box.Title>Removable</Box.Title>
        <Box.Tools>
          <Box.RemoveButton />
        </Box.Tools>
      </Box.Header>
      <Box.Body>The body of the box</Box.Body>
    </Box>
