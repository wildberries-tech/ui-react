import React from 'react';
import { create } from 'react-test-renderer';

import { InputText } from '..';
import { IconEye } from '../../icons/eye';

test('Default', () => {
    const tree = create(
        <InputText
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('With ID', () => {
    const tree = create(
        <InputText
            id="test-id"
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Required', () => {
    const tree = create(
        <InputText
            name="default"
            required={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Label', () => {
    const tree = create(
        <InputText
            name="default"
            label="Input label"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Error & Message string', () => {
    const tree = create(
        <InputText
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
        <InputText
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
        <InputText
            name="default"
            elDescription="Description string"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Description ReactNode', () => {
    const tree = create(
        <InputText
            name="default"
            elDescription={(
                <div>Description ReactNode</div>
            )}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('elBefore & elAfter', () => {
    const tree = create(
        <InputText
            name="default"
            elBefore={<IconEye />}
            elAfter={<IconEye />}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('elBefore', () => {
    const tree = create(
        <InputText
            name="default"
            elBefore={<IconEye />}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('elAfter', () => {
    const tree = create(
        <InputText
            name="default"
            elAfter={<IconEye />}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled', () => {
    const tree = create(
        <InputText
            name="default"
            disabled={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled & readOnly', () => {
    const tree = create(
        <InputText
            name="default"
            disabled={true}
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('readOnly', () => {
    const tree = create(
        <InputText
            name="default"
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
