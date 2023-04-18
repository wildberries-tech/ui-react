import React from 'react';
import { create } from 'react-test-renderer';

import { Counter } from '..';

test('Default', () => {
    const tree = create(
        <Counter children="99" />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Interactive', () => {
    const tree = create(
        <Counter
            children="11"
            onClick={jest.fn()}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Gray', () => {
    const tree = create(
        <Counter
            children="99"
            presetStyle="dark-gray"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();

    tree.update(
        <Counter
            children="99"
            presetStyle="dark-gray"
            presetSize="big"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Orange', () => {
    const tree = create(
        <Counter
            children="99"
            presetStyle="orange"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();

    tree.update(
        <Counter
            children="99"
            presetStyle="orange"
            presetSize="big"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
