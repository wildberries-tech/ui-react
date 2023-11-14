import React from 'react';
import { create } from 'react-test-renderer';

import { Checkbox } from '..';

describe('Default', () => {
    test('Not checked', () => {
        const tree = create(
            <Checkbox
                name="default"
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('With ID', () => {
        const tree = create(
            <Checkbox
                id="custom-id"
                name="default"
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Not checked & disabled', () => {
        const tree = create(
            <Checkbox
                name="default"
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked', () => {
        const tree = create(
            <Checkbox
                name="default"
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked & disabled', () => {
        const tree = create(
            <Checkbox
                name="default"
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Indeterminate', () => {
        const tree = create(
            <Checkbox
                name="default"
                indeterminate={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Indeterminate & disabled', () => {
        const tree = create(
            <Checkbox
                name="default"
                indeterminate={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe('Label', () => {
    const PROPS = {
        name : 'default',
        label: 'Checkbox label'
    };

    test('Not checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Not checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Indeterminate', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                indeterminate={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Indeterminate & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                indeterminate={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});

describe('Label & Description', () => {
    const PROPS = {
        name       : 'default',
        label      : 'Checkbox label',
        description: 'Checkbox description'
    };

    test('Not checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Not checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Indeterminate', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                indeterminate={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Indeterminate & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                indeterminate={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
