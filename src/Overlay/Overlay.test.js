import React from 'react';
import { shallow } from 'enzyme';
import Overlay from './Overlay';

const spinner = <div>spinner</div>;

it('renders default', () => {
  expect(shallow(<Overlay>{spinner}</Overlay>)).toMatchSnapshot();
});

it('renders disabled wrapper', () => {
  expect(shallow(<Overlay disableWrapper={true}>{spinner}</Overlay>))
    .toMatchSnapshot();
});

it('renders dark with disabled wrapper', () => {
  expect(shallow((
    <Overlay
      dark={true}
      disableWrapper={true}
    >
      {spinner}
    </Overlay>
  ))).toMatchSnapshot();
});

it('renders dark', () => {
  expect(shallow((
    <Overlay
      dark={true}
    >
      {spinner}
    </Overlay>
  ))).toMatchSnapshot();
});
