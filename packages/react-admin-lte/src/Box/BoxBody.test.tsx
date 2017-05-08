import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BoxBody from './BoxBody';

test('Renders default', () => {
    const component = renderer.create(
        <BoxBody />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Renders without padding', () => {
    const component = renderer.create(
        <BoxBody noPadding />
    );

    expect(component.toJSON()).toMatchSnapshot();
});
