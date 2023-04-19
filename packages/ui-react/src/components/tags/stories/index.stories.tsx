import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '../../tag';
import { Tags } from '..';
import module from '../index.module.pcss';

const META: Meta<typeof Tags> = {
    title: 'Components/Tags',
    component: Tags,
    tags: ['autodocs'],
    args: {
        children: [
            <Tag
                key={1}
                children="Tag #1"
                presetStyle="tag"
            />,
            <Tag
                key={2}
                children="Tag #2"
                presetStyle="badge-success"
            />,
            <Tag
                key={3}
                children="Tag #3"
                presetStyle="badge-rollbacked"
            />,
            <Tag
                key={4}
                children="Tag #4"
                presetStyle="badge-active"
            />,
            <Tag
                key={5}
                children="Tag #5"
                presetStyle="badge-processing"
            />,
            <Tag
                key={6}
                children="Tag #6"
                presetStyle="badge-failed"
            />,
            <Tag
                key={7}
                children="Tag #7"
                presetStyle="badge-purple"
            />
        ]
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};
