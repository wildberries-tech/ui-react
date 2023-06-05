import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';

import { Popover } from '..';

test('Default use', async () => {
    const { asFragment, getByText } = render(
        <Popover
            children="Text trigger"
            render="Text render"
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Arrow', async () => {
    const { asFragment, getByText } = render(
        <Popover
            children="Text trigger"
            render="Text render"
            arrow={true}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('CustomTagName', async () => {
    const { asFragment, getByText } = render(
        <Popover
            children="Text trigger"
            render="Text render"
            triggerTagName="section"
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Close', async () => {
    const { asFragment, getByText } = render(
        <div>
            <Popover
                children="Text trigger"
                render="Text render"
            />
            <div>Out click</div>
        </div>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });

    fireEvent.click(getByText('Out click'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Element', async () => {
    const { asFragment, getByText } = render(
        <Popover
            children={<a href="#">Text trigger</a>}
            render="Text render"
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Hover', async () => {
    const { asFragment, getByText } = render(
        <Popover
            children="Text trigger"
            render="Text render"
            trigger="hover"
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Render function', async () => {
    const { asFragment, getByText } = render(
        <Popover
            children="Text trigger"
            render={() => 'Text render'}
        />
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Text trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});
