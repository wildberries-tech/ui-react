import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import module from '../index.module.pcss';
import { IconVideo } from '../../../icons/video';
import { IconCircleMenu } from '../../../icons/circle-menu';

const META: Meta<typeof Button> = {
    title: 'Version 2 (Beta)/Components/Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Кнопка'
    },
    parameters: {
        css: {
            module
        },
        documentation: {
            setup: {
                import: {
                    version: '/v2'
                }
            }
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Primary: StoryObj<typeof META> = {
    name: 'Пресет: primary',
    args: {
        presetStyle: 'primary'
    }
};

export const PrimaryCircle: StoryObj<typeof META> = {
    name: 'Пресет: primary-circle',
    args: {
        presetStyle: 'primary-circle'
    }
};

export const Secondary: StoryObj<typeof META> = {
    name: 'Пресет: secondary',
    args: {
        presetStyle: 'secondary'
    }
};

export const SecondaryCircle: StoryObj<typeof META> = {
    name: 'Пресет: secondary-circle',
    args: {
        presetStyle: 'secondary-circle'
    }
};

export const Interface: StoryObj<typeof META> = {
    name: 'Пресет: interface',
    args: {
        presetStyle: 'interface'
    }
};

export const InterfaceCircle: StoryObj<typeof META> = {
    name: 'Пресет: interface-circle',
    args: {
        presetStyle: 'interface-circle'
    }
};

export const Error: StoryObj<typeof META> = {
    name: 'Пресет: error',
    args: {
        presetStyle: 'error'
    }
};

export const Ghost: StoryObj<typeof META> = {
    name: 'Пресет: ghost',
    args: {
        presetStyle: 'ghost'
    }
};

export const GhostError: StoryObj<typeof META> = {
    name: 'Пресет: ghost-error',
    args: {
        presetStyle: 'ghost-error'
    }
};

export const OnlyIcon: StoryObj<typeof META> = {
    name: 'Иконка',
    args: {
        presetStyle: 'primary',
        children: (
            <IconVideo />
        )
    }
};

export const IconText: StoryObj<typeof META> = {
    name: 'Иконка и текст',
    args: {
        presetStyle: 'primary',
        children   : [
            <IconVideo key={1} />,
            'Кнопка'
        ]
    }
};

export const IconTextIcon: StoryObj<typeof META> = {
    name: 'Иконки с текстом',
    args: {
        presetStyle: 'primary',
        children   : [
            <IconVideo key={1} />,
            'Кнопка',
            <IconCircleMenu key={2} />
        ]
    }
};
