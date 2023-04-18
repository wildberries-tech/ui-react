import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Tooltip> = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    args: {
        children: 'Trigger',
        render: 'По умолчанию доступны смежные категории размещения. Вы можете отключить размещение в какой-либо из категорий.'
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

export const Elements: StoryObj<typeof META> = {
    args: {
        children: (
            <a href="#">Триггер</a>
        ),
        render: () => (
            <div
                children="По умолчанию доступны смежные категории размещения. Вы можете отключить размещение в какой-либо из категорий."
            />
        )
    }
};
