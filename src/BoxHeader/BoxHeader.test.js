import React from 'react';
import classNames from 'classnames';
import { shallow } from 'enzyme';
import BoxHeader from './BoxHeader';

it('renders default', () => {
  expect(shallow(<BoxHeader />))
    .toMatchSnapshot();
});

it('renders children', () => {
  expect(shallow(<BoxHeader><div>I'm a child!</div></BoxHeader>))
    .toMatchSnapshot();
});

it('renders tools node', () => {
  expect(shallow((
    <BoxHeader
      tools={[
        <div key="1">I'm a tool!</div>,
        <div key="2">I'm a bigger tool!</div>
      ]}
    />
  ))).toMatchSnapshot();
});

it('renders tools function', () => {
  expect(shallow((
    <BoxHeader
      tools={({ className: classNameProp }) => {
        const className = classNames(classNameProp, {
          'my-class': true
        });
        return (
          <div className={className}>
            <div>I'm a small tool!</div>
            <div>I'm a medium tool!</div>
          </div>
        );
      }}
    />
  ))).toMatchSnapshot();
});
