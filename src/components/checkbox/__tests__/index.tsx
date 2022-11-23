import React from 'react';
import { create } from 'react-test-renderer';

import { Checkbox } from '../';

describe('Default', () => {
    it('Not checked', () => {
        const tree = create(
            <Checkbox
                name="default"
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Not checked & disabled', () => {
        const tree = create(
            <Checkbox
                name="default"
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Checked', () => {
        const tree = create(
            <Checkbox
                name="default"
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Checked & disabled', () => {
        const tree = create(
            <Checkbox
                name="default"
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Indeterminate', () => {
        const tree = create(
            <Checkbox
                name="default"
                indeterminate={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Indeterminate & disabled', () => {
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

    it('Not checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Not checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Indeterminate', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                indeterminate={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Indeterminate & disabled', () => {
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

    it('Not checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Not checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Checked', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Checked & disabled', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                checked={true}
                disabled={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Indeterminate', () => {
        const tree = create(
            <Checkbox
                {...PROPS}
                indeterminate={true}
            />
        );

        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('Indeterminate & disabled', () => {
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
