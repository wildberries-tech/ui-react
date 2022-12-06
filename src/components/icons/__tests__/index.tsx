import React from 'react';
import renderer from 'react-test-renderer';

import { SVG } from './../index';

it('Default', () => {
    const tree = renderer.create(<SVG />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('ClassName string', () => {
    const tree = renderer.create(<SVG className="my-class" />).toJSON();

    expect(tree).toMatchSnapshot();
});
