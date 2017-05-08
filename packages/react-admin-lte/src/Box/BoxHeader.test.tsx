import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BoxHeader from './BoxHeader';

test('Renders default', () => {
    const component = renderer.create(
        <BoxHeader />
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Renders bordered', () => {
    const component = renderer.create(
        <BoxHeader border />
    );

    expect(component.toJSON()).toMatchSnapshot();
});
