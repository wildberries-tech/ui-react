import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../..';
import module from '../../index.module.pcss';
import { Button } from '../../../../button/v1';

const META: Meta<typeof Typography.Text> = {
    title    : 'Version 2 (Beta)/Components/Typography/Text',
    component: Typography.Text,
    tags: ['autodocs'],
    args: {
        children: 'Текст'
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

export const TextLarge: StoryObj<typeof META> = {
    args: {
        presetSize: 'large',
        tagName: 'p',
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
        tagName: 'p',
        children: 'Text large bold'
    }
};

export const TextBody: StoryObj<typeof META> = {
    args: {
        presetSize: 'body',
        tagName: 'p',
        children: 'Text body'
    }
};

export const TextBodyBold: StoryObj<typeof META> = {
    args: {
        presetSize: 'body-bold',
        tagName: 'p',
        children: 'Text body bold'
    }
};

export const TextCaption: StoryObj<typeof META> = {
    args: {
        presetSize: 'caption',
        tagName: 'p',
        children: 'Text caption'
    }
};

export const TextCaptionBold: StoryObj<typeof META> = {
    args: {
        presetSize: 'caption-bold',
        presetColor: 'inverse',
        tagName: Button,
        componentProps: {
            type: 'button',
            presetStyle: 'primary'
        },
        children: 'Text caption bold'
    }
};
