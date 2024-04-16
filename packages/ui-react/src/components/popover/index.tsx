import React, {
    cloneElement, createElement,
    Fragment,
    MutableRefObject, ReactHTML,
    ReactNode,
    useCallback, useEffect,
    useMemo,
    useRef,
    useState
} from 'react';
import { useLayer, useHover, Arrow, mergeRefs } from 'react-laag';
import { isElement } from 'react-is';
import type { Options } from 'react-laag/dist/types';
import { UseHoverOptions } from 'react-laag/dist/useHover';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps {
    /**
     * Задает дополнительные CSS классы для стилизации компонента.
     **/
    readonly className?: TStyle | string,
    /**
     * Тег, который будет использоваться для рендеринга компонента.
     **/
    readonly triggerTagName?: keyof ReactHTML | '',
    /**
     * Принимает элементы, которые будут использованы в качестве триггера.
     **/
    readonly children?: ReactNode | ((isOpen: boolean, onClose: () => void) => ReactNode),
    /**
     * Событие, при котором будет открываться `Popover`.
     **/
    readonly trigger?: 'click' | 'hover',
    /**
     * Определяет, будет ли `Popover` отображаться при первоначальном рендеринге компонента.
     **/
    readonly defaultIsOpen?: boolean,
    readonly overflowContainer?: boolean,
    /**
     * Определяет, должен ли автоматически подстраиваться под размеры экрана.
     **/
    readonly auto?: boolean,
    /**
     * Определяет местоположение, куда будет отображаться всплывающий блок.
     **/
    readonly placement?: Options['placement'],
    /**
     * Определяет смещение позиции относительно триггера, который вызывает всплывающее окно.
     **/
    readonly triggerOffset?: number,
    /**
     * Задает смещение относительно контейнера, в котором находится.
     **/
    readonly containerOffset?: number,
    /**
     * Определяет смещение стрелки.
     **/
    readonly arrowOffset?: number,
    readonly preferX?: Options['preferX'],
    readonly preferY?: Options['preferY'],
    /**
     * Определяет, какой контент будет отображаться внутри всплывающего окна.
     **/
    readonly render?: ReactNode | ((isOpen: boolean, onClose: () => void, ref: MutableRefObject<HTMLElement | null>) => ReactNode),
    readonly onCloseCallback?: () => void,
    readonly hoverOptions?: UseHoverOptions,
    /**
     * Определяет, должна ли стрелка быть отображена внутри всплывающего блока.
     **/
    readonly arrow?: boolean,
    readonly arrowOptions?: {
        angle?: number,
        size?: number,
        roundness?: number,
        borderWidth?: number,
        borderColor?: string,
        backgroundColor?: string
    },
    /**
     * Устанавливает минимальную ширину выпадающего списка, равную элементу триггера
     **/
    readonly syncOptionsWidth?: boolean,
    /**
     * Свойство определяет, можно ли взаимодействовать с содержимым компонента
     **/
    readonly isOptionsHoverable?: boolean,
    /**
     * Свойство позволяет указать кастомный контейнер для рендера компонента
     **/
    readonly container?: HTMLElement,
    /**
     * Полезно при работе с вложенными слоями.
     * Он используется родительским слоем, чтобы сигнализировать дочерним слоям о том, что их слои должны закрыться.
     */
    readonly onParentClose?: () => void
}

/**
 * Компонент `Popover` используется для отображения содержимого во всплывающем блоке при клике или наведении на указанный элемент-триггер. Поповер может использоваться для отображения дополнительной информации, подсказок или контекстного меню.
 **/
export const Popover = ({ trigger = 'click', triggerTagName = 'div', auto = true, placement = 'bottom-center', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);
    const [isOpen, setIsOpen] = useState(!!props.defaultIsOpen);
    const [isOver, hoverProps] = useHover(props.hoverOptions);
    const $trigger = useRef<HTMLElement>(null);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    useEffect(() => {
        if(!isOpen || trigger === 'hover' && !isOver) {
            props.onCloseCallback?.();
        }
    }, [isOpen, isOver, trigger]);

    const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
        isOpen: trigger === 'hover' ? isOver : isOpen,
        onOutsideClick: onClose,
        onDisappear: (type) => type === 'partial' && onClose(),
        container: props.container ?? $trigger.current?.parentElement ?? undefined,
        overflowContainer: props.overflowContainer,
        triggerOffset: props.triggerOffset,
        containerOffset: props.containerOffset,
        arrowOffset: props.arrowOffset,
        preferX: props.preferX,
        preferY: props.preferY,
        onParentClose: props.onParentClose ?? onClose,
        auto,
        placement
    });

    const elTrigger = useMemo(() => {
        let attrs: Record<string, unknown> = {
            ref: mergeRefs($trigger, triggerProps.ref)
        };

        if(trigger === 'hover') {
            attrs = {
                ...attrs,
                ...hoverProps
            };
        } else {
            attrs.onClick = (e: MouseEvent) => {
                e.preventDefault();

                setIsOpen((state) => !state);
            };
        }

        const childrenElement = typeof props.children === 'function' ? props.children(trigger === 'hover' ? isOver : isOpen, onClose) : props.children;

        if(isElement(childrenElement)) {
            return (
                <span
                    className={cn('popover__trigger')}
                    {...attrs}
                >
                    {cloneElement(childrenElement)}
                </span>
            );
        }

        if(props.children) {
            return createElement(triggerTagName, {
                ...attrs,
                className: cn('popover__trigger'),
                children: childrenElement
            });
        }
    }, [props.children, trigger, hoverProps, triggerProps, isOpen, isOver, triggerTagName]);

    const elArrow = useMemo(() => {
        if(props.arrow) {
            return (
                // @TODO: Ошибка в типах onPointerEnterCapture, onPointerLeaveCapture
                // @ts-ignore
                <Arrow
                    {...props.arrowOptions}
                    {...arrowProps}
                />
            );
        }
    }, [props.arrow, props.arrowOptions, arrowProps]);

    const elChildren = useMemo(() => {
        if(typeof props.render === 'function') {
            return props.render(isOpen, onClose, $trigger);
        }

        return props.render;
    }, [props.render]);

    const elContent = useMemo(() => {
        if(isOpen || trigger === 'hover' && isOver) {
            return renderLayer(
                <span
                    {...layerProps}
                    {...(props.isOptionsHoverable ? hoverProps : {})}
                    style={{
                        ...layerProps.style,
                        minWidth: props.syncOptionsWidth ? $trigger.current?.offsetWidth : undefined
                    }}
                    className={cn('popover__content')}
                >
                    {elChildren}
                    {elArrow}
                </span>
            );
        }
    }, [isOpen, isOver, trigger, layerProps, elArrow, renderLayer]);

    return (
        <Fragment>
            {elTrigger}
            {elContent}
        </Fragment>
    );
};
