import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Checkbox } from '..';
import module from '../index.module.pcss';

import style from './index.module.pcss';

Checkbox.displayName = 'Checkbox';

const META: Meta<typeof Checkbox> = {
    title: 'Version 2 (Beta)/Components/Fields/Checkboxes/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    args: {
        name: 'my-checkbox'
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

/**
 * Пример использование предустановленного размера компонента `small`
 **/
export const PresetSmall: StoryObj<typeof META> = {
    name: 'Размер: Small',
    args: {
        presetSize: 'small'
    },
    parameters: {
        docs: {
            source: {
                code: null
            }
        }
    },
    render: (args) => (
        <div className={style['story-checkbox']}>
            <Checkbox {...args} />
            <Checkbox
                {...args}
                checked={true}
            />
            <Checkbox
                {...args}
                indeterminate={true}
            />
            <Checkbox
                {...args}
                disabled={true}
            />
            <Checkbox
                {...args}
                checked={true}
                disabled={true}
            />
            <Checkbox
                {...args}
                indeterminate={true}
                disabled={true}
            />
        </div>
    )
};

/**
 * Пример использование предустановленного размера компонента `medium`
 **/
export const PresetMedium: StoryObj<typeof META> = {
    name: 'Размер: Medium',
    args: {
        presetSize: 'medium'
    },
    parameters: PresetSmall.parameters,
    render: PresetSmall.render
};

/**
 * Пример использование предустановленного размера компонента `large`
 **/
export const PresetLarge: StoryObj<typeof META> = {
    name: 'Размер: Large',
    args: {
        presetSize: 'large'
    },
    parameters: PresetSmall.parameters,
    render: PresetSmall.render
};

/**
 * Пример использования параметра `label`
 **/
export const Label: StoryObj<typeof META> = {
    name: 'С указанием лейбла',
    args: {
        label: 'Нажимай меня полностью'
    },
    parameters: PresetSmall.parameters,
    render: PresetSmall.render
};

/**
 * Пример использования параметра `description` и `label`
 **/
export const LabelAndDescription: StoryObj<typeof META> = {
    name: 'С доп.описанием',
    args: {
        ...Label.args,
        description: 'Дополнительное описание как нажимать полностью'
    },
    parameters: PresetSmall.parameters,
    render: PresetSmall.render
};

/**
 * Пример использования пресета оформления `default-reverse`
 **/
export const DefaultReverse: StoryObj<typeof META> = {
    name: 'Пресет оформления: default-reverse',
    args: {
        ...LabelAndDescription.args,
        presetStyle: 'default-reverse'
    },
    parameters: PresetSmall.parameters,
    render: PresetSmall.render
};

/**
 * Пример использования пресета оформления `card`
 **/
export const PresetCard: StoryObj<typeof META> = {
    name: 'Пресет оформления: card',
    args: {
        ...LabelAndDescription.args,
        presetStyle: 'card'
    },
    parameters: PresetSmall.parameters,
    render: PresetSmall.render
};

