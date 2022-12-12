import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonGroup } from './../index';

it('Desktop Row', () => {
    const tree = renderer.create(<ButtonGroup presetStyle="desktop" direction="row" />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('Desktop Column', () => {
    const tree = renderer.create(<ButtonGroup presetStyle="desktop" direction="column" />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('Mobile Row', () => {
    const tree = renderer.create(<ButtonGroup presetStyle="mobile" direction="row" />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('Mobile Column', () => {
    const tree = renderer.create(<ButtonGroup presetStyle="mobile" direction="column" />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('tagName', () => {
    const tree = renderer.create(<ButtonGroup tagName="span" children="MOCK" />).toJSON();

    expect(tree).toMatchSnapshot();
});

it('tagName empty string (storybook)', () => {
    const tree = renderer.create(<ButtonGroup tagName="" children="MOCK" />).toJSON();

    expect(tree).toMatchSnapshot();
});
