import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { DropdownOption } from '../option';

test('Default use', async () => {
    const { asFragment, getByText } = render(
        <DropdownOption
            onClick={() => jest.fn}
        >
            Content
        </DropdownOption>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Content'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Active option', async () => {
    const { asFragment, getByText } = render(
        <DropdownOption
            isActive={true}
            onClick={() => jest.fn}
        >
            Content
        </DropdownOption>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Content'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

