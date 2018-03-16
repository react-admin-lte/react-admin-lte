import React from 'react';
import classNames from 'classnames';
import { shallow } from 'enzyme';
import BoxHeader from './BoxHeader';

it('renders default', () => {
  expect(shallow(<BoxHeader />))
    .toMatchSnapshot();
});

it('renders title node', () => {
  expect(shallow(<BoxHeader title="I'm a box!" />))
    .toMatchSnapshot();
});

it('renders title function', () => {
  expect(shallow((
    <BoxHeader
      title={({ className: classNameProp }) => {
        const className = classNames(classNameProp, {
          'my-class': true
        });
        return <h2 className={className}>I'm a box!</h2>
      }}
    />
  ))).toMatchSnapshot();
});

it('renders box tools', () => {
  expect(shallow(<BoxHeader><div>I'm a tool!</div></BoxHeader>))
    .toMatchSnapshot();
});
