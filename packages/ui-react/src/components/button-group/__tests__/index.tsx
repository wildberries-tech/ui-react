import React from 'react';
import * as renderer from 'react-test-renderer';

import { ButtonGroup } from '..';

test('Desktop Row', () => {
    const tree = renderer.create(
        <ButtonGroup
            presetStyle="desktop"
            direction="row"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Desktop Column', () => {
    const tree = renderer.create(
        <ButtonGroup
            presetStyle="desktop"
            direction="column"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Mobile Row', () => {
    const tree = renderer.create(
        <ButtonGroup
            presetStyle="mobile"
            direction="row"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Mobile Column', () => {
    const tree = renderer.create(
        <ButtonGroup
            presetStyle="mobile"
            direction="column"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('tagName', () => {
    const tree = renderer.create(
        <ButtonGroup
            tagName="span"
            children="MOCK"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('tagName empty string (storybook)', () => {
    const tree = renderer.create(
        <ButtonGroup
            tagName=""
            children="MOCK"
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});
