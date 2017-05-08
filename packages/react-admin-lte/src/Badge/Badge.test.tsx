import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Badge from './Badge';

test('Renders default', () => {
    const component = renderer.create(
        <Badge>14</Badge>
    );

    expect(component.toJSON()).toMatchSnapshot();
});

test('Renders background color', () => {
    const component = renderer.create(
        <Badge background="red">18</Badge>
    );

    expect(component.toJSON()).toMatchSnapshot();
});
