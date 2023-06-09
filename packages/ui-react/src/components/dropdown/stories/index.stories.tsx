import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Dropdown } from '..';
import module from '../../popover/index.module.pcss';
import { IconArrowsChevronRight } from '../../icons/arrows/chevron-right';
import { IconDownload } from '../../icons/download';
import { DropdownOption } from '../components/option';
import { Button } from '../../button';

const META: Meta<typeof Dropdown> = {
    title    : 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes : {},
    parameters: {
        css: {
            html: false,
            module
        }
    }
};

export default META;

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

export const Default: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: 'dots'
        },
        render: (isOpen, onClose) => {
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
        }
    }
};

export const DefaultOptions: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: 'chevron'
        },
        render: (isOpen, onClose) => {
            return dropdownOptions.map((option, index) => (
                <DropdownOption
                    key={index}
                    onClick={() => {
                        option.handleClick();

                        onClose();
                    }}
                >
                    {option.label}
                </DropdownOption>
            ));
        }
    }
};

export const DefaultOptionsSelected: StoryFn<typeof META> = () => {
    const [active, setActive] = useState<string>('Нажать');

    return (
        <Dropdown
            triggerElement={{
                elRightIcon: <IconArrowsChevronRight />,
                elLeftIcon: <IconDownload />,
                triggerText: active
            }}
            render={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <DropdownOption
                        key={index}
                        isActive={option.label === active}
                        onClick={() => {
                            option.handleClick();

                            setActive(option.label);

                            onClose();
                        }}
                    >
                        {option.label}
                    </DropdownOption>
                ));
            }}
        />
    );
};

export const CustomRightIcon: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: <IconArrowsChevronRight />
        },
        render: (isOpen, onClose) => {
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
        }
    }
};

export const CustomRightLeftIcon: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: <IconArrowsChevronRight />,
            elLeftIcon: <IconDownload />
        },
        render: (isOpen, onClose) => {
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
        }
    }
};

// eslint-disable-next-line react/no-multi-comp
export const ActiveElementTriggerText: StoryFn<typeof META> = () => {
    const [active, setActive] = useState<string>('Нажать триггер');

    return (
        <Dropdown
            triggerElement={(
                <div>
                    {active}
                </div>
            )}
            render={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            option.handleClick();

                            setActive(option.label);

                            onClose();
                        }}
                    >
                        {option.label}
                    </div>
                ));
            }}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const CustomElementTriggerText: StoryFn<typeof META> = () => {
    const [active, setActive] = useState<string>('Нажать');

    return (
        <Dropdown
            triggerElement={{
                elRightIcon: <IconArrowsChevronRight />,
                elLeftIcon: <IconDownload />,
                triggerText: active
            }}
            render={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            option.handleClick();

                            setActive(option.label);

                            onClose();
                        }}
                    >
                        {option.label}
                    </div>
                ));
            }}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const CustomElementTriggerButton: StoryFn<typeof META> = () => {
    return (
        <Dropdown
            triggerElement={(
                <Button>Button trigger</Button>
            )}
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
};

// eslint-disable-next-line react/no-multi-comp
export const CustomElementTriggerIcon: StoryFn<typeof META> = () => {
    return (
        <Dropdown
            triggerElement={(
                <IconArrowsChevronRight />
            )}
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
};

