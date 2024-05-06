import React from 'react';
import * as renderer from 'react-test-renderer';

import { CheckboxIcon } from '..';

const defaultProps = {
    checked: false,
    indeterminate: false,
    disabled: false
};

test('Default', () => {
    const tree = renderer.create(<CheckboxIcon {...defaultProps} />).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Is checked', () => {
    const tree = renderer.create(
        <CheckboxIcon 
            {...defaultProps} 
            checked={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Is indeterminate', () => {
    const tree = renderer.create(
        <CheckboxIcon 
            {...defaultProps} 
            indeterminate={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});

test('Is disabled', () => {
    const tree = renderer.create(
        <CheckboxIcon 
            {...defaultProps} 
            disabled={true}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});