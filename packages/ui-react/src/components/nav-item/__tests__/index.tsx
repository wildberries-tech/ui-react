import React from 'react';
import { create } from 'react-test-renderer';

import { NavItem } from '..';

test('Default', () => {
    const tree = create(
        <NavItem
            href="#"
            children="Элемент"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Active', () => {
    const tree = create(
        <NavItem
            presetStyle="active"
            href="#active"
            children="Элемент"
            title="Тайтл"
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Disable', () => {
    const tree = create(
        <NavItem
            presetStyle="active"
            href="#active"
            children="Элемент"
            title="Тайтл"
            isDisabled={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});

test('Download', () => {
    const tree = create(
        <NavItem
            presetStyle="active"
            href="#active"
            children="Элемент"
            title="Тайтл"
            download={true}
        />
    );

    expect(tree.toJSON()).toMatchSnapshot();
});
