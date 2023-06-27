import React, { Fragment } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';

import { Modal } from '..';
import { Button } from '../../button';

test('Default use', async () => {
    let isOpen = false;
    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={() => isOpen = true}>Trigger</Button>
            <Modal
                header="Modal header"
                isOpen={isOpen}
                onClose={() => isOpen = false}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => isOpen = false
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Single Button', async () => {
    let isOpen = false;
    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={() => isOpen = true}>Trigger</Button>
            <Modal
                header="Modal header"
                isOpen={isOpen}
                onClose={() => isOpen = false}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Placement bottom', async () => {
    let isOpen = false;
    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={() => isOpen = true}>Trigger</Button>
            <Modal
                placement="bottom"
                widthPreset="XL"
                header="Modal header"
                isOpen={isOpen}
                onClose={() => isOpen = false}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Placement bottom', async () => {
    let isOpen = false;
    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={() => isOpen = true}>Trigger</Button>
            <Modal
                widthPreset="S"
                header="Modal header"
                isOpen={isOpen}
                onClose={() => isOpen = false}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Esc press', async () => {
    let isOpen = false;
    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={() => isOpen = true}>Trigger</Button>
            <Modal
                widthPreset="S"
                header="Modal header"
                isOpen={isOpen}
                onClose={() => isOpen = false}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    fireEvent.keyDown(getByText('Trigger'), {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        charCode: 27
    });

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Layout click', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    const { asFragment, getByText, getByRole } = render(
        <Fragment>
            <Button onClick={handleOpen}>Trigger</Button>
            <Modal
                widthPreset="S"
                header="Modal header"
                isOpen={true}
                onClose={handleClose}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    const dialog = getByRole('dialog');

    fireEvent.click(dialog);

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('Header node', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    const { asFragment, getByText, getByRole } = render(
        <Fragment>
            <Button onClick={handleOpen}>Trigger</Button>
            <Modal
                widthPreset="S"
                header={(
                    <div>Modal header</div>
                )}
                isOpen={true}
                onClose={handleClose}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    const dialog = getByRole('dialog');

    fireEvent.click(dialog);

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('isCloseIconShow', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    const { asFragment, getByText, getByRole } = render(
        <Fragment>
            <Button onClick={handleOpen}>Trigger</Button>
            <Modal
                widthPreset="S"
                isCloseIconShow={true}
                isOpen={true}
                onClose={handleClose}
                primaryButton={{
                    children: 'Primary button'
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    const dialog = getByRole('dialog');

    fireEvent.click(dialog);

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('isOpen false no buttons', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={handleOpen}>Trigger</Button>
            <Modal
                widthPreset="L"
                isCloseIconShow={true}
                onClose={handleClose}
                bodyPaddingPreset="reduced"
            >
                Modal content
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});

test('isOpen false no buttons', async () => {
    const handleOpen = jest.fn();
    const handleClose = jest.fn();

    const { asFragment, getByText } = render(
        <Fragment>
            <Button onClick={handleOpen}>Trigger</Button>
            <Modal
                onClose={handleClose}
                secondaryButton={{
                    children: 'Button',
                    onClick : handleClose
                }}
            >
                <div>Modal content</div>
            </Modal>
        </Fragment>
    );

    expect(asFragment()).toMatchSnapshot();

    fireEvent.click(getByText('Trigger'));

    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});
