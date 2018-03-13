import * as React from 'react';
import * as renderer from 'react-test-renderer';
import BoxFooter from './BoxFooter';

test('Renders default', () => {
    const component = renderer.create(
        <BoxFooter />
    );

    expect(component.toJSON()).toMatchSnapshot();
});
