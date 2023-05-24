import React, { HTMLAttributes, ReactElement, ReactNode, useCallback } from 'react';
import { UseLayerOptions } from 'react-laag';
import { PlacementType } from 'react-laag/dist/PlacementType';
import { UseHoverOptions } from 'react-laag/dist/useHover';
import { isElement } from 'react-is';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { Popover } from '../popover';
import { IconMoreVertical } from '../icons/more-vertical';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';

import style from './index.module.pcss';

interface ICustomTriggerElement {
    elLeftIcon?: ReactElement,
    /**
     * Вариант правой иконки дропдауна
     */
    elRightIcon?: 'dots' | 'chevron' | ReactElement,
    /**
     * Текст дефолтного триггера
     */
    triggerText?: string
}

export interface IProps<T extends ReactElement | ICustomTriggerElement = any> extends Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
    /**
     * Задает дополнительные CSS классы для стилизации компонента.
     **/
    className?: string | TStyle,
    /**
     * Children - выпадающий элемент дропдауна
     **/
    render?: ((isOpen: boolean, onClose: () => void) => ReactNode | Array<ReactNode> | null),
    /**
     * Свойства слоя компонента React-laag
     **/
    layerOptions?: Partial<UseLayerOptions>,
    /**
     * Позиционирование элемента дропдауна
     **/
    placement?: PlacementType,
    /**
     * Событие закрытия дропдауна
     */
    onClose?: () => void,
    /**
     * Событие, при котором будет открываться `Dropdown`.
     */
    trigger?: 'click' | 'hover',
    /**
     * Свойства события hover компонента React-laag
     **/
    hoverOptions?: UseHoverOptions,
    /**
     * Триггер-элемент дропдауна
     */
    triggerElement?: T
}

export const Dropdown = ({ placement = 'bottom-end', ...props }: IProps) => {
    const cn = useClassnames(style, props.className, true);

    const elRightIconRender = useCallback((isOpen: boolean) => {
        if(props.triggerElement?.elRightIcon === 'dots') {
            return (
                <IconMoreVertical
                    svg={{ className: cn('dropdown__trigger-icon') }}
                />
            );
        }

        if(props.triggerElement?.elRightIcon === 'chevron') {
            return (
                <IconArrowsChevronBottom
                    svg={{
                        className: cn('dropdown__trigger-icon', {
                            'dropdown__trigger-icon_active': isOpen
                        })
                    }}
                />
            );
        }

        return props.triggerElement?.elRightIcon;
    }, [props.triggerElement?.elRightIcon]);

    const elTrigger = useCallback((isOpen: boolean) => {
        if(isElement(props.triggerElement)) {
            return (
                <div className={cn('dropdown__trigger')}>
                    {props.triggerElement}
                </div>
            );
        }

        return (
            <div className={cn('dropdown__trigger')}>
                {props.triggerElement?.elLeftIcon}
                {props.triggerElement?.triggerText}
                {elRightIconRender(isOpen)}
            </div>
        );
    }, [props.triggerElement]);

    return (
        <Popover
            className={cn('dropdown')}
            placement={placement}
            children={elTrigger}
            {...props}
        />
    );
};

export default Dropdown;
