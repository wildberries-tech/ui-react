import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '..';
import { IconVideo } from '../../icons/video';
import { IconCircleMenu } from '../../icons/circle-menu';

const META: Meta<typeof Button> = {
    title: 'Components/Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Кнопка'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const Primary: StoryObj<typeof META> = {
    args: {
        presetStyle: 'primary'
    }
};

export const Dashed: StoryObj<typeof META> = {
    args: {
        presetStyle: 'dashed'
    }
};

export const Ghost: StoryObj<typeof META> = {
    args: {
        presetStyle: 'ghost'
    }
};

export const Negative: StoryObj<typeof META> = {
    args: {
        presetStyle: 'negative'
    }
};

export const Success: StoryObj<typeof META> = {
    args: {
        presetStyle: 'success'
    }
};

export const Deprecated: StoryObj<typeof META> = {
    args: {
        presetStyle: 'deprecated'
    }
};

export const Icon: StoryObj<typeof META> = {
    args: {
        presetStyle: 'primary',
        children: (
            <IconVideo />
        )
    }
};

export const IconDouble: StoryObj<typeof META> = {
    args: {
        presetStyle: 'primary',
        children   : [
            <IconVideo key={1} />,
            <IconCircleMenu key={2} />
        ]
    }
};

export const IconText: StoryObj<typeof META> = {
    args: {
        presetStyle: 'default',
        children   : [
            <IconVideo key={1} />,
            'Кнопка'
        ]
    }
};

export const IconTextIcon: StoryObj<typeof META> = {
    args: {
        presetStyle: 'default',
        children   : [
            <IconVideo key={1} />,
            'Кнопка',
            <IconCircleMenu key={2} />
        ]
    }
};
