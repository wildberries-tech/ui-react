import React from 'react';
import { create } from 'react-test-renderer';

import { Tags } from '..';
import { Tag } from '../../tag';

test('Default', () => {
    const tree = create(
        <Tags>
            <Tag children="Название тега" />
            <Tag children="Название тега #2" />
            <Tag children="Название тега #3" />
        </Tags>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Custom tagName', () => {
    const tree = create(
        <Tags tagName="ul">
            <Tag children="Название тега" />
            <Tag children="Название тега #2" />
            <Tag children="Название тега #3" />
        </Tags>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
