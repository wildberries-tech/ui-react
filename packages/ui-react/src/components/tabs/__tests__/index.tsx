import React from 'react';
import { create } from 'react-test-renderer';

import { TabsComposition } from '..';

test('Default use', () => {
    const tree = create(
        <TabsComposition
            items={[{
                id: '1',
                elTab: 'Tab #1',
                elPanel: 'Panel #1'
            }]}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Without ID', () => {
    const tree = create(
        <TabsComposition
            items={[{
                elTab: 'Tab #1',
                elPanel: 'Panel #1'
            }]}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Empty', () => {
    const tree = create(
        <TabsComposition />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Function elements', () => {
    const tree = create(
        <TabsComposition
            items={[{
                elTab: () => 'Tab #1',
                elPanel: () => 'Panel #1'
            }]}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
