import React from 'react';
import { shallow } from 'enzyme';
import InfoBox from './InfoBox';

it('renders icon background', () => {
  expect(shallow((
    <InfoBox
      backgroundColor="red"
      backgroundPlacement="icon"
      icon={<div />}
      number={67}
      text="LIKES"
    >
      <div />
    </InfoBox>
  ))).toMatchSnapshot();
});

it('renders box background', () => {
  expect(shallow((
    <InfoBox
      backgroundColor="red"
      backgroundPlacement="box"
      icon={<div />}
      number={67}
      text="LIKES"
    >
      <div />
    </InfoBox>
  ))).toMatchSnapshot();
});

it('passes other props to root', () => {
  expect(shallow(
    <InfoBox
      backgroundColor="red"
      backgroundPlacement="box"
      icon={<div />}
      number={67}
      text="LIKES"
      other="thing"
    >
      <div />
    </InfoBox>
  )).toMatchSnapshot();
});
