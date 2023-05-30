import React from 'react';
import { create } from 'react-test-renderer';

import { Radio } from '..';

test('Default', () => {
    const tree = create(
        <Radio
            tabIndex={1}
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Disabled', () => {
    const tree = create(
        <Radio
            disabled={true}
            tabIndex={1}
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Default Checked', () => {
    const tree = create(
        <Radio
            checked={true}
            tabIndex={1}
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Default Checked Disabled', () => {
    const tree = create(
        <Radio
            checked={true}
            disabled={true}
            tabIndex={1}
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('With Description', () => {
    const tree = create(
        <Radio
            description="Desc"
            tabIndex={1}
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('With Id', () => {
    const tree = create(
        <Radio
            id="id"
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
