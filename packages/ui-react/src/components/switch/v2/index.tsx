import React, { forwardRef, InputHTMLAttributes, ReactNode, useState, useRef, useImperativeHandle } from 'react';
import KeyCode from 'rc-util/lib/KeyCode';

import { type TStyle, useClassnames } from '../../../hooks/use-classnames';
import { IconArrowsRefreshCcw } from '../../icons/arrows/refresh-ccw';

import style from './index.module.pcss';

type TNative = InputHTMLAttributes<HTMLButtonElement>;

export interface IProps {
    /**
     * Название поля ввода, которое будет отправлено на сервер вместе со значением.
     **/
    readonly name: string,
    /**
     * Позволяет добавить пользовательские CSS-классы
     **/
    readonly className?: string | TStyle,
    /**
     * Текст метки, связанной с переключателем.
     **/
    readonly label?: ReactNode,
    /**
     * Значение, которое будет отправлено на сервер при отправке формы.
     **/
    readonly value?: boolean,
    /**
     * Значение переключателя по умолчанию.
     **/
    readonly defaultValue?: boolean,
    /**
     * Устанавливает или определяет, должен ли компонент быть отмечен.
     **/
    readonly checked?: TNative['checked'],
    /**
     * Определяет, должен ли флажок быть установлен при первоначальной загрузке компонента.
     **/
    readonly defaultChecked?: TNative['defaultChecked'],
    /**
     * Функция обратного вызова, которая будет вызываться при изменении значения переключателя.
     **/
    readonly onChange?: (newChecked: boolean,
        event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void,
    /**
     * Функция обратного вызова, которая будет вызываться при клике на переключатель.
     **/
    readonly onClick?: (newChecked: boolean,
        event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => void,
    /**
     * Функция обратного вызова, которая будет вызываться при потере фокуса на переключателе.
     **/
    readonly onKeyDown?: (
        event: React.KeyboardEvent<HTMLButtonElement>) => void,
    /**
     * Функция обратного вызова, которая будет вызываться при нажатии на клавиши клавиатуры.
     **/
    readonly onBlur?: TNative['onBlur'],
    /**
     * Функция обратного вызова, которая будет вызываться при получении фокуса на переключателе.
     **/
    readonly onFocus?: TNative['onFocus'],
    /**
     * Указывает, должен ли компонент получать фокус при монтировании (отрисовке) на странице.
     **/
    readonly autoFocus?: TNative['autoFocus'],
    /**
     * Уникальный идентификатор переключателя.
     **/
    readonly id?: TNative['id'],
    /**
     * Порядковый номер элемента при переключении по `Tab`.
     **/
    readonly tabIndex?: TNative['tabIndex'],
    /**
     * Определяет, будет ли компонент отключен.
     **/
    readonly disabled?: TNative['disabled'],
    /**
     * Размер элемента.
     **/
    readonly size?: 'sm' | 'md' | 'lg',
    /**
     * Дизейблит компонент и отображает анимацию загрузки.
     **/
    readonly loading?: boolean
}

/**
 * Компонент `Switch` представляет собой переключатель, который позволяет пользователю выбирать один или несколько вариантов из группы.
 **/
export const Switch = forwardRef<HTMLButtonElement | null, IProps>(({ tabIndex = 0, size = 'md', ...props }, ref) => {
    const cn = useClassnames(style, props.className);

    const [innerChecked, setInnerChecked] = useState<boolean>(props.defaultChecked ?? props.checked ?? false);

    const switchRef = useRef<HTMLButtonElement | null>(null);

    useImperativeHandle<HTMLButtonElement | null, HTMLButtonElement | null>(ref, () => switchRef.current);

    const isDisabled = props.disabled ?? props.loading;
  
    const triggerChange = (
        newChecked: boolean,
        event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>
    ) => {
        let mergedChecked = innerChecked;
  
        if(!props.disabled) {
            mergedChecked = newChecked;

            setInnerChecked(mergedChecked);

            props.onChange?.(mergedChecked, event);
        }
  
        return mergedChecked;
    };
  
    const onInternalKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if(event.which === KeyCode.LEFT) {
            triggerChange(false, event);
        } else if(event.which === KeyCode.RIGHT) {
            triggerChange(true, event);
        }

        props.onKeyDown?.(event);
    };
  
    const onInternalClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const checkedValue = triggerChange(!innerChecked, event);

        props.onClick?.(checkedValue, event);
    };

    const onMouseLeaveCallback = () => {
        switchRef.current?.blur();
    };

    return (
        <label
            id={props.id}
            className={cn('switch', {
                [`switch_size-${size}`]: size
            })}
        >
            <button
                ref={switchRef}
                id={props.id ? `${props.id}-input` : undefined}
                name={props.name}
                aria-checked={innerChecked}
                defaultChecked={props.defaultChecked}
                onBlur={props.onBlur}
                onFocus={props.onFocus}
                onKeyDown={onInternalKeyDown}
                onClick={onInternalClick}
                onMouseLeave={onMouseLeaveCallback}
                autoFocus={props.autoFocus}
                disabled={isDisabled}
                tabIndex={props.disabled ? -1 : tabIndex}
                className={cn('switch__track', {
                    'switch__track_checked': innerChecked,
                    'switch__track_disabled': isDisabled
                })}
            >
                <div
                    className={cn('switch__track-point', {
                        'switch__track-point_checked': innerChecked
                    })}
                >
                    {props.loading ? (
                        <span className={cn('switch__track-point_loading')}>
                            <IconArrowsRefreshCcw />
                        </span>
                    ) : null}
                </div>
            </button>
            {props.label}
        </label>
    );
});
