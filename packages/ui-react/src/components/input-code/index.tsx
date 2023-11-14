import React, {
    useRef,
    useState,
    useEffect,
    useCallback,
    type DetailedHTMLProps,
    type InputHTMLAttributes,
    type FocusEvent,
    type KeyboardEvent,
    type ChangeEvent
} from 'react';

import { type TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

type TNative = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const KEYS = {
    backspace: 8,
    left_arrow: 37,
    up_arrow: 38,
    right_arrow: 39,
    down_arrow: 40,
    e: 69
};

export interface IProps {
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    readonly className?: string | TStyle,
    /**
     * Параметр `length` используется для задания количества символов в коде.
     */
    readonly length?: number,
    /**
     * Параметр `defaultValue` используется для задания начального значения поля.
     */
    readonly defaultValue?: string,
    /**
     * Параметр `autoFocus` определяет, следует ли автоматически устанавливать фокус на элемент, когда компонент монтируется.
     */
    readonly autoFocus?: TNative['autoFocus'],
    /**
     * Тип поля ввода.
     */
    readonly type?: 'text' | 'number' | 'password' | 'tel',
    /**
     * Параметр `autoComplete` определяет, должен ли браузер автоматически заполнять значение в поле ввода.
     */
    readonly autoComplete?: TNative['autoComplete'],
    /**
     * Параметр `disabled` указывает, должно ли поле ввода быть неактивным и не реагировать на пользовательский ввод. Если `disabled` установлен в `true`, пользователь не сможет редактировать текст в поле ввода и оно будет иметь соответствующий стиль, который указывает на то, что поле недоступно для редактирования.
     */
    readonly disabled?: TNative['disabled'],
    /**
     * Регулярное выражение, которому должно соответствовать значение поля.
     */
    readonly pattern?: TNative['pattern'],
    /**
     * Параметр `inputMode` определяет режим ввода текста для поля ввода. Он определяет, какая клавиатура должна появляться при вводе текста на мобильных устройствах.
     */
    readonly inputMode?: TNative['inputMode'],
    /**
     * Параметр `onChange` предназначен для обработки события изменения содержимого поля ввода
     **/
    readonly onChange?: (value: string) => void,
    /**
     * Состояние ошибки
     **/
    readonly isError?: boolean
}

/**
 * Компонент позволяет создавать поля для ввода кодов
 **/
export const InputCode = ({ length = 6, autoComplete = 'off', type = 'text', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);
    const $inputs = useRef<Array<HTMLInputElement | null>>([]);
    const [values, setValues] = useState(() => {
        const result: Array<string> = [];

        for(let i = 0; i < length; i += 1) {
            const value = props.defaultValue?.[i] ?? '';

            result.push(value);
        }

        return result;
    });

    const onFocus = useCallback((event: FocusEvent<HTMLInputElement>) => {
        event.target.select();
    }, []);

    const onKeyDown = useCallback((index: number) => (event: KeyboardEvent<HTMLInputElement>) => {
        const isNumberKey = /^\d$/.test(event.key);

        if(!isNumberKey) {
            event.preventDefault();
        }

        switch (event.keyCode) {
            case KEYS.backspace: {
                event.preventDefault();

                setValues((prevState) => {
                    const result = [...prevState];

                    result[index] = '';

                    return result;
                });

                const $el = $inputs.current[index - 1];

                if($el) {
                    $el.focus();

                    $el.select();
                }
                break;
            }

            case KEYS.left_arrow: {
                event.preventDefault();
                const $el = $inputs.current[index - 1];

                if($el) {
                    $el.focus();

                    $el.select();
                }
                break;
            }

            case KEYS.right_arrow: {
                event.preventDefault();
                const $el = $inputs.current[index + 1];

                if($el) {
                    $el.focus();

                    $el.select();
                }
                break;
            }

            case KEYS.up_arrow:
                event.preventDefault();
                break;

            case KEYS.down_arrow:
                event.preventDefault();
                break;

            // В числовые поля по умолчанию можно вводить степень
            case KEYS.e:
                if(event.currentTarget.type === 'number') {
                    event.preventDefault();
                }
                break;

            default:
                break;
        }
    }, [type]);

    const onChange = useCallback((index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        let value = String(event.target.value);

        if(type === 'number') {
            value = value.replace(/[^\d]/g, '');

            if(event.target.valueAsNumber > 9 && index) {
                return;
            }
        }

        const $el = (value.length > 1 ? $inputs.current[value.length - 1] : $inputs.current[index + 1]) ?? $inputs.current[index];

        if($el) {
            $el.focus();

            $el.select();
        }

        setValues((prevState) => {
            const result = [...prevState];

            if(value.length > 1) {
                value
                    .split('')
                    .map((chart, i) => {
                        const position = index + i;

                        if(position < length) {
                            result[position] = chart;
                        }
                    });
            } else {
                result[index] = value;
            }

            return result;
        });
    }, []);

    useEffect(() => {
        props.onChange?.(values.join(''));
    }, values);

    return (
        <div className={cn('input-code')}>
            {values.map((value, index) => (
                <input
                    key={index}
                    ref={(node) => {
                        $inputs.current[index] = node;
                    }}
                    type={type}
                    autoFocus={!!(props.autoFocus && index === 0)}
                    value={value}
                    min={0}
                    max={9}
                    maxLength={index ? 1 : values.length}
                    className={cn('input-code__input', {
                        'input-code__input_is-error': props.isError
                    })}
                    autoComplete={autoComplete}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown(index)}
                    onChange={onChange(index)}
                    disabled={props.disabled}
                    pattern={props.pattern}
                    inputMode={props.inputMode}
                />
            ))}
        </div>
    );
};
