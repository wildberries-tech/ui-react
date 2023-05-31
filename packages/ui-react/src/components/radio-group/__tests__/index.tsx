import React from 'react';
import { create } from 'react-test-renderer';

import { RadioGroup } from '..';
import { Radio } from '../../radio';

const children = [
    <Radio
        key="1"
        name="name-1"
        label="label-1"
    />,
    <Radio
        key="2"
        name="name-2"
        label="label-2"
    />,
    <Radio
        key="3"
        name="name-3"
        label="label-3"
    />,
    <Radio
        key="4"
        name="name-4"
        label="label-4"
    />
];

test('Default', () => {
    const tree = create(
        <RadioGroup
            children={children}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Legend', () => {
    const tree = create(
        <RadioGroup
            children={children}
            legend="Legend"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Legend Object', () => {
    const tree = create(
        <RadioGroup
            children={children}
            legend={{
                presetColor: 'error',
                presetSize: 'caption'
            }}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

