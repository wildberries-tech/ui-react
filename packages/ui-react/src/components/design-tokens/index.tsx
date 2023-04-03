import React, { ReactNode, ReactHTML } from 'react';

import { useDesignTokens, IOptions } from '../../hooks/use-design-tokens';

export interface IProps extends IOptions {
    /**
     * Параметр `children` может содержать любые дочерние элементы, например строки, числа, другие компоненты React и т. д.
     */
    children?: ReactNode,
    /**
     * Параметр `tagName` используется для указания HTML-тега, который будет использоваться для отображения компонента или его части.
     */
    tagName?: keyof ReactHTML
}

/**
 * Компонент Design Tokens - это набор именованных значений, таких как цвета, размеры и типографика, которые определяют внешний вид интерфейса приложения.
 * Компонент Design Tokens позволяет упростить создание стилей для компонентов и повысить согласованность дизайна.
 *
 * Все предоставляемые переменные ограничены областью использования компонента.
 *
 * [Палитра](?path=/docs/native-design-tokens-палитра--документация#палитра)
 *
 * [Тени](?path=/docs/native-design-tokens-тени--документация#тени)
 */
export const DesignTokens = ({ tagName: Component = 'div', ...props }: IProps) => {
    const attrs = useDesignTokens({
        className: props.className
    });

    return (
        <Component
            {...props}
            {...attrs}
        />
    );
};
