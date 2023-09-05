import { Meta, StoryObj } from '@storybook/react';

import { InputCode } from '..';

const META: Meta<typeof InputCode> = {
    title    : 'Components/Fields/Code',
    component: InputCode,
    tags: ['autodocs'],
    args     : {

    },
    parameters: {
        layout: 'padded'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {
    name: 'Песочница'
};

/**
 * Ввод заблокирован.
 **/
export const Disabled: StoryObj<typeof META> = {
    name: 'Неактивно',
    args: {
        disabled: true
    }
};

/**
 * Ввод заблокирован с установленным по умолчанию значением.
 **/
export const DisabledAndDefault: StoryObj<typeof META> = {
    name: 'Неактивно со значением',
    args: {
        disabled    : true,
        defaultValue: '250987'
    }
};

/**
 * Ввод заблокирован с установленным по умолчанию значением.
 **/
export const Number: StoryObj<typeof META> = {
    name: 'Числовой тип',
    args: {
        type: 'number'
    }
};

/**
 * Установка длинны кода
 **/
export const CustomLength: StoryObj<typeof META> = {
    name: '4-х значный код',
    args: {
        length: 4
    }
};
