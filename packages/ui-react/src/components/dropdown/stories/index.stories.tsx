import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Dropdown } from '..';
import module from '../../popover/index.module.pcss';
import { IconArrowsChevronRight } from '../../icons/arrows/chevron-right';
import { IconDownload } from '../../icons/download';

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
        children: dropdownOptions.map((option, index) => (
            <div
                key={index}
                onClick={option.handleClick}
            >
                {option.label}
            </div>
        ))
    }
};

export const DefaultOptions: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: 'chevron'
        },
        children: dropdownOptions.map((option, index) => (
            <div
                key={index}
                onClick={option.handleClick}
            >
                {option.label}
            </div>
        ))
    }
};

export const CustomRightIcon: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: <IconArrowsChevronRight />
        },
        children: dropdownOptions.map((option, index) => (
            <div
                key={index}
                onClick={option.handleClick}
            >
                {option.label}
            </div>
        ))
    }
};

export const CustomRightLeftIcon: StoryObj<typeof META> = {
    args: {
        triggerElement: {
            triggerText: 'Нажать',
            elRightIcon: <IconArrowsChevronRight />,
            elLeftIcon: <IconDownload />
        },
        children: dropdownOptions.map((option, index) => (
            <div
                key={index}
                onClick={option.handleClick}
            >
                {option.label}
            </div>
        ))
    }
};

export const ActiveElementTriggerText: StoryFn<typeof META> = () => {
    const [active, setActive] = useState<string>('Нажать');

    return (
        <Dropdown
            triggerElement={(
                <div>
                    {active}
                </div>
            )}
            children={dropdownOptions.map((option, index) => (
                <div
                    key={index}
                    onClick={() => {
                        option.handleClick();

                        setActive(option.label);
                    }}
                >
                    {option.label}
                </div>
            ))}
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
            children={dropdownOptions.map((option, index) => (
                <div
                    key={index}
                    onClick={() => {
                        option.handleClick();

                        setActive(option.label);
                    }}
                >
                    {option.label}
                </div>
            ))}
        />
    );
};

// eslint-disable-next-line react/no-multi-comp
export const ChildrenFunction: StoryFn<typeof META> = () => {
    const [active, setActive] = useState<string>('Нажать');

    return (
        <Dropdown
            triggerElement={{
                elRightIcon: <IconArrowsChevronRight />,
                elLeftIcon: <IconDownload />,
                triggerText: active
            }}
            children={(isOpen, onClose) => {
                return dropdownOptions.map((option, index) => (
                    <div
                        key={index}
                        onClick={() => {
                            option.handleClick();

                            onClose();

                            setActive(option.label);
                        }}
                    >
                        {option.label}
                    </div>
                ));
            }}
        />
    );
};
