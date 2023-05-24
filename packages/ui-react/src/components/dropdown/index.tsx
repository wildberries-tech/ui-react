import React, {
    ReactNode,
    HTMLAttributes,
    useState,
    useMemo,
    useEffect,
    useRef,
    cloneElement,
    ReactElement
} from 'react';
import { mergeRefs, useHover, useLayer, UseLayerOptions } from 'react-laag';
import { PlacementType } from 'react-laag/dist/PlacementType';
import { isElement } from 'react-is';
import { UseHoverOptions } from 'react-laag/dist/useHover';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';
import { IconArrowsChevronBottom } from '../icons/arrows/chevron-bottom';
import { IconMoreVertical } from '../icons/more-vertical';

import style from './index.module.pcss';

interface ICustomTriggerElement {
    elLeftIcon?: ReactElement,
    /**
     * @description Вариант правой иконки дропдауна
     * @default dots
     * @param dots - иконка "3 точки"
     * @param chevron - иконка "стрелка вниз"
     * @param JSX.Element - любая кастомная иконка
     */
    elRightIcon?: 'dots' | 'chevron' | ReactElement,
    /**
     * @description Текст дефолтного триггера
     */
    triggerText?: string
}

export interface IProps<T extends ReactElement | ICustomTriggerElement = any> extends Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
    /**
     * @description Задает дополнительные CSS классы для стилизации компонента.
     **/
    className?: string | TStyle,
    /**
     * @description Может принимать следующие типы:
     * @type ReactElement
     * @type Array<ReactElement>
     * @type {(isOpen: boolean, onClose: () => void) => ReactElement | Array<ReactElement>}
     * @description Функция отдаёт параметры:
     * @param isOpen - текущее состояние дропдауна
     * @callback onClose - функция для закрытия дропдауна по клику на содержимое children
     **/
    children?: Array<ReactElement> | ReactElement | ((isOpen: boolean, onClose: () => void) => ReactElement | Array<ReactElement>),
    /**
     * @description Свойства слоя компонента React-laag
     **/
    layerOptions?: Partial<UseLayerOptions>,
    /**
     * @description Позиционирование элемента дропдауна
     * @type {"bottom-start" | "bottom-end" | "bottom-center" | "top-start" | "top-center" | "top-end" | "left-end" | "left-center" | "left-start" | "right-end" | "right-center" | "right-start" | "center"}
     **/
    placement?: PlacementType,
    /**
     * @description Текст дефолтного триггера
     */
    onCloseOnChildrenClick?: boolean,
    /**
     * @description Событие закрытия дропдауна
     */
    onClose?: () => void,
    /**
     * @description Вариант правой иконки дропдауна
     * @default dots
     * @param dots - иконка "3 точки"
     * @param chevron - иконка "стрелка вниз"
     * @param JSX.Element - любая кастомная иконка
     */
    trigger?: 'click' | 'hover',
    /**
     * @description Свойства события hover компонента React-laag
     **/
    hoverOptions?: UseHoverOptions,
    /**
     * @description Триггер-элемент дропдауна, может принимать {@type { ReactElement }} или {@type { ICustomTriggerElement }}
     */
    triggerElement?: T
}

export const Dropdown = ({ placement = 'bottom-end', ...props }: IProps) => {
    const cn = useClassnames(style, props.className, true);
    const [isOver, hoverProps] = useHover(props.hoverOptions);
    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);
    const $trigger = useRef<HTMLElement>(null);
    const { renderLayer, triggerProps, layerProps } = useLayer({
        placement,
        triggerOffset : 6,
        container        : $trigger.current?.parentElement ?? undefined,
        onOutsideClick: () => setIsOpenDropdown(false),
        isOpen           : props.trigger === 'hover' ? isOver : isOpenDropdown,
        auto          : true,
        ...props.layerOptions ?? {}
    });

    useEffect(() => {
        if(!isOpenDropdown) {
            props.onClose?.();
        }
    }, [isOpenDropdown]);

    const elRightIconRender = useMemo(() => {
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
                            'dropdown__trigger-icon_active': isOpenDropdown
                        })
                    }}
                />
            );
        }

        return props.triggerElement?.elRightIcon;
    }, [props.triggerElement?.elRightIcon, isOpenDropdown]);

    const elLabel = useMemo(() => {
        let attrs: Record<string, unknown> = {
            ref: mergeRefs($trigger, triggerProps.ref)
        };

        if(props.trigger === 'hover') {
            attrs = {
                ...attrs,
                ...hoverProps
            };
        } else {
            attrs.onClick = (e: MouseEvent) => {
                e.preventDefault();

                setIsOpenDropdown((state) => !state);
            };
        }

        if(isElement(props.triggerElement)) {
            return cloneElement(props.triggerElement, attrs);
        }

        return (
            <div
                {...attrs}
                className={cn('dropdown__trigger', {
                    'dropdown__trigger_active': isOpenDropdown
                })}
            >
                {props.triggerElement?.elLeftIcon}
                {props.triggerElement?.triggerText}
                {elRightIconRender}
            </div>
        );
    }, [props.triggerElement, isOpenDropdown, isOver]);

    const elChildren = () => {
        if(props.children) {
            if(typeof props.children === 'function') {
                return props.children(isOpenDropdown, () => setIsOpenDropdown(false));
            }

            return props.children;
        }

        return null;
    };

    return (
        <div className={cn('dropdown')}>
            <div className={cn('dropdown__controls')}>
                {elLabel}
            </div>
            {renderLayer(
                (isOpenDropdown || props.trigger === 'hover' && isOver) && (
                    <div
                        {...layerProps}
                        style={{
                            ...layerProps.style,
                            ...props.style ?? {},
                            minWidth: $trigger.current?.offsetWidth
                        }}
                        className={cn('dropdown__wrapper', {
                            [`dropdown__wrapper_${placement}`]: placement
                        })}
                    >
                        {elChildren()}
                    </div>
                )
            )}
        </div>
    );
};

export default Dropdown;
