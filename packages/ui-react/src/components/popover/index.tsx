import React, {
    cloneElement,
    MutableRefObject,
    ReactNode,
    useCallback,
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
    className?: TStyle | string,
    /**
     * Принимает элементы, которые будут использованы в качестве триггера.
     **/
    children?: ReactNode | ((isOpen: boolean, onClose: () => void) => ReactNode),
    /**
     * Событие, при котором будет открываться `Popover`.
     **/
    trigger?: 'click' | 'hover',
    /**
     * Определяет, будет ли `Popover` отображаться при первоначальном рендеринге компонента.
     **/
    defaultIsOpen?: boolean,
    overflowContainer?: boolean,
    /**
     * Определяет, должен ли автоматически подстраиваться под размеры экрана.
     **/
    auto?: boolean,
    /**
     * Определяет местоположение, куда будет отображаться всплывающий блок.
     **/
    placement?: Options['placement'],
    /**
     * Определяет смещение позиции относительно триггера, который вызывает всплывающее окно.
     **/
    triggerOffset?: number,
    /**
     * Задает смещение относительно контейнера, в котором находится.
     **/
    containerOffset?: number,
    /**
     * Определяет смещение стрелки.
     **/
    arrowOffset?: number,
    preferX?: Options['preferX'],
    preferY?: Options['preferY'],
    /**
     * Определяет, какой контент будет отображаться внутри всплывающего окна.
     **/
    render?: ReactNode | ((isOpen: boolean, onClose: () => void, ref: MutableRefObject<HTMLElement | null>) => ReactNode),
    hoverOptions?: UseHoverOptions,
    /**
     * Определяет, должна ли стрелка быть отображена внутри всплывающего блока.
     **/
    arrow?: boolean,
    arrowOptions?: {
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
    syncOptionsWidth?: boolean
}

/**
 * Компонент `Popover` используется для отображения содержимого во всплывающем блоке при клике или наведении на указанный элемент-триггер. Поповер может использоваться для отображения дополнительной информации, подсказок или контекстного меню.
 **/
export const Popover = ({ trigger = 'click', auto = true, placement = 'bottom-center', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);
    const [isOpen, setIsOpen] = useState(!!props.defaultIsOpen);
    const [isOver, hoverProps] = useHover(props.hoverOptions);
    const $trigger = useRef<HTMLElement>(null);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, []);

    const { renderLayer, triggerProps, layerProps, arrowProps } = useLayer({
        isOpen           : trigger === 'hover' ? isOver : isOpen,
        onOutsideClick   : onClose,
        onDisappear      : onClose,
        container        : $trigger.current?.parentElement ?? undefined,
        overflowContainer: props.overflowContainer,
        triggerOffset    : props.triggerOffset,
        containerOffset  : props.containerOffset,
        arrowOffset      : props.arrowOffset,
        preferX          : props.preferX,
        preferY          : props.preferY,
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
                ...hoverProps,
                ...triggerProps
            };
        } else {
            attrs.onClick = (e: MouseEvent) => {
                e.preventDefault();

                setIsOpen((state) => !state);
            };
        }

        const childrenElement = typeof props.children === 'function' ? props.children(isOpen, onClose) : props.children;

        if(isElement(childrenElement)) {
            return cloneElement(childrenElement, attrs);
        }

        if(props.children) {
            return (
                <div
                    {...attrs}
                    className={cn('popover__trigger')}
                    children={childrenElement}
                />
            );
        }
    }, [props.children, trigger, hoverProps, triggerProps]);

    const elArrow = useMemo(() => {
        if(props.arrow) {
            return (
                <Arrow
                    {...props.arrowOptions}
                    {...arrowProps}
                />
            );
        }
    }, [props.arrow, props.arrowOptions, arrowProps]);

    const elContent = useMemo(() => {
        if(isOpen || trigger === 'hover' && isOver) {
            return renderLayer(
                <div
                    {...layerProps}
                    style={{
                        ...layerProps.style,
                        minWidth: props.syncOptionsWidth ? $trigger.current?.offsetWidth : undefined
                    }}
                    className={cn('popover__content')}
                >
                    {typeof props.render === 'function' ? props.render(isOpen, onClose, $trigger) : props.render}
                    {elArrow}
                </div>
            );
        }
    }, [isOpen, isOver, trigger, layerProps, elArrow, renderLayer]);

    return (
        <div>
            {elTrigger}
            {elContent}
        </div>
    );
};
