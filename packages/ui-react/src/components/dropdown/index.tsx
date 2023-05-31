import React, { HTMLAttributes, ReactElement, ReactNode, useCallback } from 'react';
import { isElement } from 'react-is';

import { useClassnames } from '../../hooks/use-classnames';
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

export interface IProps<T extends ReactElement | ICustomTriggerElement = any> extends Pick<HTMLAttributes<HTMLDivElement>, 'style'>, Omit<IPopoverProps, 'syncOptionsWidth'> {
    /**
     * Render выпадающего элемента дропдауна
     **/
    render?: ((isOpen: boolean, onClose: () => void) => ReactNode | null),
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
        <Popover
            placement={placement}
            children={elTrigger}
            syncOptionsWidth={true}
            triggerOffset={4}
            className={{
                'popover__content': cn('dropdown__content')
            }}
            {...props}
        />
    );
};

export default Dropdown;