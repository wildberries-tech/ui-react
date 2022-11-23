import React from 'react';
import { create } from 'react-test-renderer';

import { CheckboxGroup } from '../';

it('No Legend', () => {
    const tree = create(
        <CheckboxGroup
            children="Mock"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Legend', () => {
    const tree = create(
        <CheckboxGroup
            legend="Legend name"
            children="Mock"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Disable', () => {
    const tree = create(
        <CheckboxGroup
            legend="Legend name"
            disabled={true}
            children="Mock"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

it('Direction', () => {
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
