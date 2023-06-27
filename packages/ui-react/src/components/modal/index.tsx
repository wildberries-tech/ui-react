import React, { MouseEvent, ReactNode, useEffect, useMemo, useRef } from 'react';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';
import { createPortal } from 'react-dom';

import { TStyle, useClassnames } from '../../hooks/use-classnames';
import { Button, IProps as IButtonProps } from '../button';
import { Title } from '../typography/title';
import { IconClear } from '../icons/clear';
import { consoleFormat } from '../../tools/console-format';

import style from './index.module.pcss';

export interface IProps {
    className?: string | TStyle,
    header?: ReactNode,
    children: ReactNode,
    placement?: 'center' | 'bottom',
    onClose?: () => void,
    primaryButton?: IButtonProps,
    secondaryButton?: IButtonProps,
    anchorElement?: HTMLElement,
    bodyPaddingPreset?: 'default' | 'reduced',
    isCloseIconShow?: boolean,
    isOpen?: boolean,
    widthPreset?: 'S' | 'M' | 'L' | 'XL'
}

export const Modal = ({
    anchorElement = document.body,
    placement = 'center',
    bodyPaddingPreset = 'default',
    isCloseIconShow = true,
    widthPreset = 'M',
    isOpen = false,
    ...props
}: IProps) => {
    const cn = useClassnames(style, props.className, true);

    const $root = useRef<HTMLDivElement>(null);
    const $body = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tempRef = $root.current;

        if(tempRef && placement !== 'bottom') {
            disableBodyScroll(tempRef);
        }

        return () => {
            if(tempRef && placement !== 'bottom') {
                enableBodyScroll(tempRef);
            }
        };
    }, []);

    useEffect(() => {
        if(placement === 'bottom' && (widthPreset === 'L' || widthPreset === 'XL')) {
            consoleFormat('Modal: Позиционирование `placement={bottom}` несовместимо с пресетами `widthPreset={L}` и `widthPreset={XL}`');
        }

        if(placement === 'center' && widthPreset === 'S') {
            consoleFormat('Modal: Позиционирование `placement={center}` несовместимо с пресетами `widthPreset={S}`');
        }
    }, [widthPreset, placement]);

    const escClick = (e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            props.onClose?.();
        }
    };

    const onClickLayout = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();

        e.nativeEvent.stopImmediatePropagation();
    };

    useEffect(() => {
        document.addEventListener('keydown', escClick, false);

        return () => {
            document.removeEventListener('keydown', escClick, false);
        };
    }, []);

    const elHeader = useMemo(() => {
        if(typeof props.header === 'string') {
            return (
                <Title tagName="h2">
                    {props.header}
                </Title>
            );
        }

        return props.header;
    }, [props.header]);

    const elCloseIcon = useMemo(() => {
        if(!!props.onClose && !!isCloseIconShow) {
            return (
                <IconClear
                    svg={{
                        className: cn('modal__icon-close', {
                            [`modal__icon-close_${bodyPaddingPreset}`]: bodyPaddingPreset === 'default' && placement !== 'bottom',
                            'modal__icon-close_alone': !props.header
                        }),
                        onClick: props.onClose
                    }}
                />
            );
        }
    }, [bodyPaddingPreset, placement, isCloseIconShow, props.onClose]);

    const elModalHeader = useMemo(() => {
        if(props.header) {
            return (
                <div className={cn('modal__header-wrapper')}>
                    {elHeader}
                    {elCloseIcon}
                </div>
            );
        }

        return elCloseIcon;
    }, [elHeader, isCloseIconShow, props.header, elCloseIcon]);

    if(isOpen) {
        return createPortal(
            (
                <div
                    className={cn('modal', `modal_${placement}`)}
                    ref={$root}
                    onClick={props.onClose}
                >
                    <div
                        className={cn('modal__content', `modal__content_${widthPreset}`)}
                        ref={$body}
                        onClick={onClickLayout}
                        title="layout"
                        role="dialog"
                    >
                        <div
                            className={cn('modal__body', {
                                [`modal__body_${bodyPaddingPreset}`]: placement !== 'bottom',
                                'modal__body_with-buttons': !!props.primaryButton || !!props.secondaryButton,
                                'modal__body_bottom': placement === 'bottom',
                                'modal__body_no-header': !props.header
                            })}
                        >
                            {elModalHeader}
                            <div
                                className={cn('modal__children', {
                                    'modal__children_bottom': placement === 'bottom'
                                })}
                            >
                                {props.children}
                            </div>
                            {props.primaryButton || props.secondaryButton ? (
                                <div
                                    className={cn('modal__footer', {
                                        'modal__footer_bottom': placement === 'bottom'
                                    })}
                                >
                                    {props.primaryButton ? (
                                        <Button
                                            presetStyle="primary"
                                            {...props.primaryButton}
                                        />
                                    ) : null}
                                    {props.secondaryButton ? (
                                        <Button
                                            presetStyle="default"
                                            {...props.secondaryButton}
                                        />
                                    ) : null}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ),
            anchorElement
        );
    }

    return null;
};

export default Modal;
