import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Label from './Label';

test('Renders default', () => {
    const component = renderer.create(
        <Label>old</Label>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Renders with background color', () => {
    const component = renderer.create(
        <Label background="green">old</Label>
    );

    expect(component.toJSON()).toMatchSnapshot();
});
