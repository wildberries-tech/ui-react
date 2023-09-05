import React, { forwardRef } from 'react';
import { PatternFormat } from 'react-number-format';

import { useClassnames } from '../../hooks/use-classnames';
import { InputText, type IProps as IPropsInputText } from '../input-text';

import style from './index.module.pcss';

export interface IProps extends IPropsInputText {
    /**
     * Указывает тип поля
     **/
    type: 'text' | 'tel' | 'password',
    /**
     * Форматирование пустых значений
     **/
    allowEmptyFormatting?: boolean,
    /**
     * Шаблон формата с помощью символа `patternChar`.
     **/
    format: string,
    /**
     * Используется как символ маски
     **/
    mask?: Array<string> | string,
    /**
     * Символ-заполнитель для чисел.
     **/
    patternChar?: string,
    /**
     * Функция проверки для проверки входного значения. Если эта функция возвращает `false`, метод `onChange` не сработает и входное значение не изменится.
     **/
    isAllowed?: Parameters<typeof PatternFormat>[0]['isAllowed'],
    valueIsNumericString?: Parameters<typeof PatternFormat>[0]['valueIsNumericString'],
    onValueChange?: Parameters<typeof PatternFormat>[0]['onValueChange'],
    renderText?: Parameters<typeof PatternFormat>[0]['renderText']
}

/**
 * Компонент позволяет создавать поля с масками и форматами ввода
 **/
export const InputPatternFormat = forwardRef<HTMLInputElement | null, IProps>((props, ref) => {
    const cn = useClassnames(style, props.className);

    return (
        <PatternFormat
            {...props}
            className={cn('input-number-format')}
            customInput={InputText}
            displayType="input"
            getInputRef={ref}
        />
    );
});
