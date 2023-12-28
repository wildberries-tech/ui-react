import React from 'react';
import { create } from 'react-test-renderer';

import { Switch } from '..';

describe('Default', () => {
    test('Not checked', () => {
        const tree = create(
            <Switch
                name="default"
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('With ID', () => {
        const tree = create(
            <Switch
                id="custom-id"
                name="default"
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Not checked & disabled', () => {
        const tree = create(
            <Switch
                name="default"
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked', () => {
        const tree = create(
            <Switch
                name="default"
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked & disabled', () => {
        const tree = create(
            <Switch
                name="default"
                checked={true}
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
            <Switch
                {...PROPS}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Not checked & disabled', () => {
        const tree = create(
            <Switch
                {...PROPS}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked', () => {
        const tree = create(
            <Switch
                {...PROPS}
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked & disabled', () => {
        const tree = create(
            <Switch
                {...PROPS}
                checked={true}
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
            <Switch
                {...PROPS}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Not checked & disabled', () => {
        const tree = create(
            <Switch
                {...PROPS}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked', () => {
        const tree = create(
            <Switch
                {...PROPS}
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    test('Checked & disabled', () => {
        const tree = create(
            <Switch
                {...PROPS}
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });
});
