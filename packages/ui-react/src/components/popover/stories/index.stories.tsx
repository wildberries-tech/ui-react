import React from 'react';
import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Popover } from '..';
import module from '../index.module.pcss';
import { IconArrowsChevronBottom } from '../../icons/arrows/chevron-bottom';

const META: Meta<typeof Popover> = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
    args: {
        children: 'Trigger',
        render: 'Render'
    },
    parameters: {
        css: {
            html: false,
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Hover: StoryObj<typeof META> = {
    args: {
        trigger: 'hover'
    }
};

export const HoverAndOptionsHoverable: StoryObj<typeof META> = {
    args: {
        trigger: 'hover',
        isOptionsHoverable: true
    }
};

export const HoverAndChildrenFunc: StoryObj<typeof META> = {
    name: 'Ховер + Сhildren функция',
    args: {
        trigger : 'hover',
        children: (isOpen, onClose) => {
            console.info(isOpen, onClose);

            return 'Children Function';
        }
    }
};

export const HoverAndOptionsHoverableOffset: StoryObj<typeof META> = {
    args: {
        trigger: 'hover',
        isOptionsHoverable: true,
        triggerOffset: 4,
        hoverOptions: {
            delayLeave: 300
        }
    }
};

export const CustomTagName: StoryObj<typeof META> = {
    args: {
        trigger: 'hover',
        triggerTagName: 'section'
    }
};

export const CustomTagNameChildren: StoryObj<typeof META> = {
    args: {
        trigger: 'hover',
        triggerTagName: 'section',
        children: 'Test'
    }
};

export const Elements: StoryObj<typeof META> = {
    args: {
        children: (
            <a href="#">Триггер</a>
        ),
        render: () => (
            <div
                children="Render"
            />
        )
    }
};

export const TriggerInLine: StoryFn<typeof META> = () => {
    return (
        <p>
            Some text&nbsp;
            <Popover
                children="trigger"
                render="Option"
                triggerTagName="span"
            />
        </p>
    );
};

// eslint-disable-next-line react/no-multi-comp
export const TriggerIcon: StoryFn<typeof META> = () => {
    return (
        <p
            style={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            Some text&nbsp;
            <Popover
                children={<IconArrowsChevronBottom />}
                render="Option"
            />
        </p>
    );
};
