import React from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { Popover, type IProps as IPropsPopover } from '../popover';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Задает дополнительные CSS классы для стилизации компонента.
     **/
    className?: TStyle | string,
    /**
     * Принимает элементы, которые будут использованы в качестве триггера.
     **/
    children?: IPropsPopover['children'],
    /**
     * Событие, при котором будет открываться `Popover`.
     **/
    trigger?: IPropsPopover['trigger'],
    /**
     * Определяет, будет ли `Popover` отображаться при первоначальном рендеринге компонента.
     **/
    defaultIsOpen?: IPropsPopover['defaultIsOpen'],
    /**
     * Определяет местоположение, куда будет отображаться всплывающий блок.
     **/
    placement?: IPropsPopover['placement'],
    /**
     * Определяет, какой контент будет отображаться внутри всплывающего окна.
     **/
    render?: IPropsPopover['render']
}

/**
 * Компонент `Tooltip` используется для отображения содержимого во всплывающем блоке при клике или наведении на указанный элемент-триггер. `Tooltip` может использоваться для отображения дополнительной информации, подсказок.
 **/
export const Tooltip = ({ className, ...props }: IProps) => {
    const cn = useClassnames(style, className);

    return (
        <Popover
            {...props}
            className={cn('tooltip')}
            triggerOffset={10}
            arrow={true}
            arrowOptions={{
                angle          : 45,
                size           : 6,
                backgroundColor: 'var(--tooltip-background-color)'
            }}
        />
    );
};
