import React from 'react';
import { create } from 'react-test-renderer';

import { DesignTokens } from '..';

test('Default use', () => {
    const tree = create(
        <DesignTokens>
            <div>My APP</div>
        </DesignTokens>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Custom tag', () => {
    const tree = create(
        <DesignTokens tagName="main">
            <div>My APP</div>
        </DesignTokens>
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
