import React from 'react';
import { render } from '@testing-library/react';

import { InputCode } from '..';

test('Default', () => {
    const { asFragment } = render(
        <InputCode />
    );

    expect(asFragment()).toMatchSnapshot();
});

test('disabled', () => {
    const { asFragment } = render(
        <InputCode
            disabled={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();
});
