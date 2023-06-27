import React, { Fragment, useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Modal } from '..';
import module from '../index.module.pcss';
import { Button } from '../../button';

const META: Meta<typeof Modal> = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    args: {
        header  : 'Заголовок',
        children: 'Модалка'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Default: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                header="Modal header"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const DefaultSizeL: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                header="Modal header"
                widthPreset="L"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const DefaultSizeXL: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                header="Modal header"
                widthPreset="XL"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const BottomSizeS: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                header="Modal header"
                placement="bottom"
                widthPreset="S"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const BottomPlacement: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                isOpen={isOpen}
                widthPreset="XL"
                placement="bottom"
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ReducedPadding: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                isOpen={isOpen}
                header="Modal header"
                bodyPaddingPreset="reduced"
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const NoButtons: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                isOpen={isOpen}
                header="Modal header"
                bodyPaddingPreset="reduced"
                onClose={() => setIsOpen(false)}
            >
                Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const MuchContentNoButtons: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                isOpen={isOpen}
                header="Modal header"
                onClose={() => setIsOpen(false)}
            >
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
            </Modal>
        </Fragment>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const MuchContent: StoryFn<typeof META> = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <Button onClick={() => setIsOpen(true)}>Click to open</Button>
            <Modal
                isOpen={isOpen}
                header="Modal header"
                onClose={() => setIsOpen(false)}
                primaryButton={{
                    children: 'Primary button'
                }}
                secondaryButton={{
                    children: 'Secondary button',
                    onClick : () => setIsOpen(false)
                }}
            >
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
                Modal content Modal content Modal content Modal content Modal content Modal content
            </Modal>
        </Fragment>
    );
};
