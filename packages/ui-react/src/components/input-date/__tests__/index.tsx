import React from 'react';
import { create } from 'react-test-renderer';

import { InputDate } from '..';

test('Default', () => {
    const tree = create(
        <InputDate
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('With ID', () => {
    const tree = create(
        <InputDate
            id="test-id"
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Required', () => {
    const tree = create(
        <InputDate
            name="default"
            required={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Label', () => {
    const tree = create(
        <InputDate
            name="default"
            label="Input label"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Placeholder', () => {
    const tree = create(
        <InputDate
            name="default"
            placeholder="Input label"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled', () => {
    const tree = create(
        <InputDate
            name="default"
            disabled={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled & readOnly', () => {
    const tree = create(
        <InputDate
            name="default"
            disabled={true}
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('readOnly', () => {
    const tree = create(
        <InputDate
            name="default"
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
