import React from 'react';
import * as renderer from 'react-test-renderer';

import { SVG } from '..';

test('Default', () => {
    const tree = renderer.create(<SVG />).toJSON();

    expect(tree).toMatchSnapshot();
});

test('ClassName string', () => {
    const tree = renderer.create(<SVG className="my-class" />).toJSON();

    expect(tree).toMatchSnapshot();
});
