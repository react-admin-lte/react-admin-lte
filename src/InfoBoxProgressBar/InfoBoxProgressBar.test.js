import React from 'react';
import { shallow } from 'enzyme';
import InfoBoxProgressBar from './InfoBoxProgressBar';

it('renders with props passed to bar', () => {
  expect(shallow((
    <InfoBoxProgressBar
      now={67}
      description="i made progress"
    />
  ))).toMatchSnapshot();
});
