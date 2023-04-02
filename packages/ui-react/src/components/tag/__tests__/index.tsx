import React from 'react';
import { create } from 'react-test-renderer';

import { Tag } from '..';

test('Default', () => {
    const tree = create(
        <Tag children="Название тега" />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Interactive', () => {
    const tree = create(
        <Tag
            children="Название тега"
            onClick={jest.fn()}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('presetSize', () => {
    const tree = create(
        <Tag
            children="Название тега"
            presetSize="small"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();

    tree.update(
        <Tag
            children="Название тега"
            presetSize="medium"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();

    tree.update(
        <Tag
            children="Название тега"
            presetSize="large"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
