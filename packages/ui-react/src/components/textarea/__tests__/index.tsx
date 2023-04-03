import React from 'react';
import { create } from 'react-test-renderer';

import { InputTextarea } from '..';

test('Default', () => {
    const tree = create(
        <InputTextarea
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Required', () => {
    const tree = create(
        <InputTextarea
            name="default"
            required={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Label', () => {
    const tree = create(
        <InputTextarea
            name="default"
            label="Input label"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Error & Message string', () => {
    const tree = create(
        <InputTextarea
            name="default"
            label="Input label"
            isError={true}
            elError="Message"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Error & Message ReactNode', () => {
    const tree = create(
        <InputTextarea
            name="default"
            label="Input label"
            isError={true}
            elError={(
                <div>Custom error</div>
            )}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Description string', () => {
    const tree = create(
        <InputTextarea
            name="default"
            elDescription="Description string"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Description ReactNode', () => {
    const tree = create(
        <InputTextarea
            name="default"
            elDescription={(
                <div>Description ReactNode</div>
            )}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled', () => {
    const tree = create(
        <InputTextarea
            name="default"
            disabled={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled & readOnly', () => {
    const tree = create(
        <InputTextarea
            name="default"
            disabled={true}
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('readOnly', () => {
    const tree = create(
        <InputTextarea
            name="default"
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
