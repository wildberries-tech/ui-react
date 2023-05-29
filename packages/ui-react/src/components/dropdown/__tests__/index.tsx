import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Dropdown } from '..';
import { IconArrowsChevronRight } from '../../icons/arrows/chevron-right';
import { IconDownload } from '../../icons/download';

const dropdownOptions = [{
    label: 'Option 1',
    value: '1',
    handleClick: () => console.info('Click option 1')
}, {
    label: 'Option 2',
    value: '2',
    handleClick: () => console.info('Click option 2')
}, {
    label: 'Option 3',
    value: '3',
    handleClick: () => console.info('Click option 3')
}];

test('Default use', async () => {
    const { asFragment, getByText } = render(
        <Dropdown
            triggerElement={{
                elRightIcon: 'dots',
                triggerText: 'Trigger'
            }}
            render={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            option.handleClick();

                            onClose();
                        }}
                    >
                        {option.label}
                    </div>
                ));
            }}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Default use icon dots', async () => {
    const { asFragment, getByText } = render(
        <Dropdown
            triggerElement={{
                elRightIcon: 'chevron',
                triggerText: 'Trigger'
            }}
            render={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            option.handleClick();

                            onClose();
                        }}
                    >
                        {option.label}
                    </div>
                ));
            }}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Default use', async () => {
    const { asFragment, getByText } = render(
        <Dropdown
            triggerElement={{
                elRightIcon: <IconArrowsChevronRight />,
                elLeftIcon: <IconDownload />,
                triggerText: 'Trigger'
            }}
            render={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            option.handleClick();

                            onClose();
                        }}
                    >
                        {option.label}
                    </div>
                ));
            }}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

