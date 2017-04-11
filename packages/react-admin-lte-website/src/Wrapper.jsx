import React from 'react';
import Frame from 'react-frame-component';

const Wrapper = ({ children }) =>
  <Frame
    head={
      <link type="text/css" rel="stylesheet" href="styles.css" />
    }
    style={{
      border: 'none',
      height: '100%',
      width: '100%',
    }}
  >
    {children}
  </Frame>;

export default Wrapper;
