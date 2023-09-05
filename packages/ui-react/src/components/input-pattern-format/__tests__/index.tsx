import React from 'react';
import { create } from 'react-test-renderer';

import { InputPatternFormat } from '..';
import { IconEye } from '../../icons/eye';

test('Default', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('With ID', () => {
    const tree = create(
        <InputPatternFormat
            id="test-id"
            name="default"
            type="text"
            format="### ## ##"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Required', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            required={true}
            type="text"
            format="### ## ##"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Label', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            label="Input label"
            type="text"
            format="### ## ##"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Error & Message string', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            label="Input label"
            isError={true}
            elError="Message"
            type="text"
            format="### ## ##"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Error & Message ReactNode', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            label="Input label"
            isError={true}
            type="text"
            format="### ## ##"
            elError={(
                <div>Custom error</div>
            )}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Description string', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            elDescription="Description string"
            type="text"
            format="### ## ##"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Description ReactNode', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            elDescription={(
                <div>Description ReactNode</div>
            )}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('elBefore & elAfter', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            elBefore={<IconEye />}
            elAfter={<IconEye />}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('elBefore', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            elBefore={<IconEye />}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('elAfter', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            elAfter={<IconEye />}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            disabled={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('disabled & readOnly', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            disabled={true}
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('readOnly', () => {
    const tree = create(
        <InputPatternFormat
            name="default"
            type="text"
            format="### ## ##"
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
