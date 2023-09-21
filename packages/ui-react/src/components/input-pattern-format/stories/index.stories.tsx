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

/**
 * Простой пример с телефонным номером
 **/
export const Phone: StoryObj<typeof META> = {
    name: 'Телефон',
    args: {
        label: 'Номер телефона',
        format: '+7 ### ###-##-##'
    }
};

/**
 * Форматирование поля применяется даже на пустое значение
 **/
export const EmptyFormat: StoryObj<typeof META> = {
    name: 'Форматирование по умолчанию',
    args: {
        label: 'Номер телефона',
        allowEmptyFormatting: true,
        format: '+7 (###) ###-##-##'
    }
};

/**
 * В примере в препроцессинг функции вырезаются цифры `5`
 **/
export const PreProcessing: StoryObj<typeof META> = {
    name: 'С препроцессингом',
    args: {
        label: 'Номер телефона',
        format: '+7 (###) ###-##-##',
        preFormat: (value) => {
            return value.replace(/5+/g, '');
        }
    }
};
