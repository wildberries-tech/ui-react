import React, { HTMLAttributes, MutableRefObject, ReactElement, ReactNode, useCallback } from 'react';
import { isElement } from 'react-is';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Popover, IProps as IPopoverProps } from '../popover';
import { IconMoreVertical } from '../icons/more-vertical';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';

import style from './index.module.pcss';

interface ICustomTriggerElement {
    /**
     * Левая иконка дропдауна
     */
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

export interface IProps<T extends ReactElement | ICustomTriggerElement = any> extends Pick<HTMLAttributes<HTMLDivElement>, 'style'>, IPopoverProps {
    /**
     * Render выпадающего элемента дропдауна
     **/
    render?: ((isOpen: boolean, onClose: () => void, ref: MutableRefObject<HTMLElement | null>) => ReactNode | null),
    /**
     * Триггер-элемент дропдауна
     */
    triggerElement?: T | ((isOpen: boolean) => T | null),
    /**
     * Задает дополнительные CSS классы для стилизации родительского компонента Popover
     */
    popoverClassname?: TStyle | string
}

export const Dropdown = ({ placement = 'bottom-end', syncOptionsWidth = true, className, ...props }: IProps) => {
    const cn = useClassnames(style, className);

    const elRightIconRender = useCallback((isOpen: boolean) => {
        if(props.triggerElement?.elRightIcon === 'dots') {
            return (
                <IconMoreVertical
                    svg={{
                        className: cn('dropdown__trigger-icon', {
                            'dropdown__trigger-icon_active-dots': isOpen
                        })
                    }}
                />
            );
        }

        if(props.triggerElement?.elRightIcon === 'chevron') {
            return (
                <IconArrowsChevronBottom
                    svg={{
                        className: cn('dropdown__trigger-icon', 'dropdown__trigger-icon_chevron', {
                            'dropdown__trigger-icon_active-chevron': isOpen
                        })
                    }}
                />
            );
        }

        return props.triggerElement?.elRightIcon;
    }, [props.triggerElement?.elRightIcon]);

    const elTrigger = useCallback((isOpen: boolean) => {
        if(typeof props.triggerElement === 'function') {
            return props.triggerElement(isOpen);
        }

        if(isElement(props.triggerElement)) {
            return props.triggerElement;
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
        <div className={cn('dropdown')}>
            <Popover
                className={props.popoverClassname}
                placement={placement}
                children={elTrigger}
                triggerOffset={4}
                isOptionsHoverable={true}
                hoverOptions={{
                    ...props.hoverOptions,
                    delayLeave: props.hoverOptions?.delayLeave ?? 100
                }}
                syncOptionsWidth={syncOptionsWidth}
                {...props}
            />
        </div>
    );
};

export default Dropdown;
