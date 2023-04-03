import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '..';
import { IconVerified } from '../../icons/verified';
import { IconGlobe } from '../../icons/globe';

const META: Meta<typeof Tag> = {
    title: 'Components/Tag',
    component: Tag,
    tags: ['autodocs'],
    args: {
        children: 'Название тега'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {};

export const BadgeSuccess: StoryObj<typeof META> = {
    args: {
        presetStyle: 'badge-success'
    }
};

export const BadgeProcessing: StoryObj<typeof META> = {
    args: {
        presetStyle: 'badge-processing'
    }
};

export const BadgeRollbacked: StoryObj<typeof META> = {
    args: {
        presetStyle: 'badge-rollbacked'
    }
};

export const BadgeActive: StoryObj<typeof META> = {
    args: {
        presetStyle: 'badge-active'
    }
};

export const BadgeFailed: StoryObj<typeof META> = {
    args: {
        presetStyle: 'badge-failed'
    }
};

export const BadgePurple: StoryObj<typeof META> = {
    args: {
        presetStyle: 'badge-purple'
    }
};

export const TagSmall: StoryObj<typeof META> = {
    args: {
        presetStyle: 'tag',
        presetSize : 'small'
    }
};

export const TagMedium: StoryObj<typeof META> = {
    args: {
        presetStyle: 'tag',
        presetSize : 'medium'
    }
};

export const TagLarge: StoryObj<typeof META> = {
    args: {
        presetStyle: 'tag',
        presetSize : 'large'
    }
};

export const TagIconBefore: StoryObj<typeof META> = {
    args: {
        presetStyle: 'tag',
        presetSize : 'small',
        children   : [
            <IconGlobe key="icon-before" />,
            'Название тега'
        ]
    }
};

export const TagIconAfter: StoryObj<typeof META> = {
    args: {
        presetStyle: 'tag',
        presetSize : 'medium',
        children   : [
            'Название тега',
            <IconVerified key="icon-after" />
        ]
    }
};

export const TagIcons: StoryObj<typeof META> = {
    args: {
        presetStyle: 'tag',
        presetSize : 'large',
        children   : [
            <IconGlobe key="icon-before" />,
            'Название тега',
            <IconVerified key="icon-after" />
        ]
    }
};
