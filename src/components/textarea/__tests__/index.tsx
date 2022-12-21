import React from 'react';
import { create } from 'react-test-renderer';

import { InputTextarea } from '../';

it('Default', () => {
    const tree = create(
        <InputTextarea
            name="default"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Required', () => {
    const tree = create(
        <InputTextarea
            name="default"
            required={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Label', () => {
    const tree = create(
        <InputTextarea
            name="default"
            label="Input label"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Error & Message string', () => {
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

it('Error & Message ReactNode', () => {
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

it('Description string', () => {
    const tree = create(
        <InputTextarea
            name="default"
            elDescription="Description string"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Description ReactNode', () => {
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

it('disabled', () => {
    const tree = create(
        <InputTextarea
            name="default"
            disabled={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('disabled & readOnly', () => {
    const tree = create(
        <InputTextarea
            name="default"
            disabled={true}
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('readOnly', () => {
    const tree = create(
        <InputTextarea
            name="default"
            readOnly={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
