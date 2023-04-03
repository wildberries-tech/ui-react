import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '..';

const META: Meta<typeof Loader> = {
    title: 'Components/Loader',
    component: Loader,
    tags: ['autodocs']
};

export default META;

export const Default: StoryObj<typeof META> = {
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
};

export const Small: StoryObj<typeof META> = {
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        presetSize: 'small'
    }
};

export const Medium: StoryObj<typeof META> = {
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        presetSize: 'medium'
    }
};

export const Large: StoryObj<typeof META> = {
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    },
    args: {
        presetSize: 'large'
    }
};

export const RichGrey: StoryObj<typeof META> = {
    args: {
        presetStyle: 'rich-grey'
    }
};

export const Grey: StoryObj<typeof META> = {
    args: {
        presetStyle: 'grey'
    }
};

export const Red: StoryObj<typeof META> = {
    args: {
        presetStyle: 'red'
    }
};

export const LightGreen: StoryObj<typeof META> = {
    args: {
        presetStyle: 'light-green'
    }
};

export const DarkPurple: StoryObj<typeof META> = {
    args: {
        presetStyle: 'dark-purple'
    }
};
