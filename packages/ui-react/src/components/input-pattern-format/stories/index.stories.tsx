import { Meta, StoryObj } from '@storybook/react';

import { InputPatternFormat } from '..';

const META: Meta<typeof InputPatternFormat> = {
    title    : 'Components/Fields/Pattern Format',
    component: InputPatternFormat,
    tags: ['autodocs'],
    args     : {
        name: 'pattern-input',
        label: 'Паттерн лейбл'
    },
    parameters: {
        layout: 'padded'
    }
};

export default META;

export const Default: StoryObj<typeof META> = {
    name: 'Песочница'
};

export const Phone: StoryObj<typeof META> = {
    name: 'Телефон',
    args: {
        label: 'Номер телефона',
        format: '+7 ### ###-##-##'
    }
};

export const EmptyFormat: StoryObj<typeof META> = {
    name: 'Форматирование по умолчанию',
    args: {
        label: 'Номер телефона',
        allowEmptyFormatting: true,
        format: '+7 (###) ###-##-##'
    }
};
