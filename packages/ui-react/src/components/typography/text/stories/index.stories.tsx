import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../..';
import module from '../../index.module.pcss';
import { Button } from '../../../button';

const META: Meta<typeof Typography.Text> = {
    title    : 'Components/Typography/Text',
    component: Typography.Text,
    tags: ['autodocs'],
    args: {
        children: 'Текст'
    },
    parameters: {
        css: {
            module
        }
    }
};

export default META;

export const TextLarge: StoryObj<typeof META> = {
    args: {
        presetSize: 'large',
        parent: 'p',
        children: 'Text large'
    }
};

export const TagNameDeprecated: StoryObj<typeof META> = {
    args: {
        presetSize: 'large',
        tagName: 'p',
        children: 'Text large'
    }
};

export const TextLargeBold: StoryObj<typeof META> = {
    args: {
        presetSize: 'large-bold',
        parent: 'p',
        children: 'Text large bold'
    }
};

export const TextBody: StoryObj<typeof META> = {
    args: {
        presetSize: 'body',
        parent: 'p',
        children: 'Text body'
    }
};

export const TextBodyBold: StoryObj<typeof META> = {
    args: {
        presetSize: 'body-bold',
        parent: 'p',
        children: 'Text body bold'
    }
};

export const TextCaption: StoryObj<typeof META> = {
    args: {
        presetSize: 'caption',
        parent: 'p',
        children: 'Text caption'
    }
};

export const TextCaptionBold: StoryObj<typeof META> = {
    args: {
        presetSize: 'caption-bold',
        presetColor: 'inverse',
        parent: Button,
        type: 'button',
        presetStyle: 'primary',
        children: 'Text caption bold'
    }
};
