import React from 'react';
import { create } from 'react-test-renderer';

import { CheckboxGroup } from '..';

test('No Legend', () => {
    const tree = create(
        <CheckboxGroup
            children="Mock"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Legend', () => {
    const tree = create(
        <CheckboxGroup
            legend="Legend name"
            children="Mock"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Disable', () => {
    const tree = create(
        <CheckboxGroup
            legend="Legend name"
            disabled={true}
            children="Mock"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Direction', () => {
    expect(
        create(
            <CheckboxGroup
                children="Mock"
            />
        ).toJSON()
    ).toMatchSnapshot();

    expect(
        create(
            <CheckboxGroup
                direction="row"
                children="Mock"
            />
        ).toJSON()
    ).toMatchSnapshot();

    expect(
        create(
            <CheckboxGroup
                direction="column"
                children="Mock"
            />
        ).toJSON()
    ).toMatchSnapshot();
});
