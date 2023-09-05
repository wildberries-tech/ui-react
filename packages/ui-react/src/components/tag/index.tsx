import React, { ReactNode, HTMLAttributes } from 'react';

import { TStyle, useClassnames } from '../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IProps extends Pick<HTMLAttributes<HTMLSpanElement>, 'onClick' | 'onDrag' | 'onMouseEnter' | 'onMouseLeave'> {
    /**
     * Если параметр `id` не указан, то компонент будет создан без уникального идентификатора.
     */
    readonly id?: string,
    /**
     * Параметр `children` может содержать любые дочерние элементы, например строки, числа, другие компоненты React и т. д.
     */
    readonly children?: ReactNode,
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    readonly className?: string | TStyle,
    /**
     * При использовании `presetStyle` компонент будет автоматически применять стили, соответствующие выбранному значению.
     */
    readonly presetStyle?: 'tag' | 'badge-success' | 'badge-rollbacked' | 'badge-active' | 'badge-processing' | 'badge-failed' | 'badge-purple',
    /**
     * При использовании `presetSize` компонент будет автоматически применять размер, соответствующий выбранному значению.
     */
    readonly presetSize?: 'small' | 'medium' | 'large'
}

/**
 * Компонент `Tag` (Badge) используется для отображения информации в виде меток или значков, которые могут быть прикреплены к другим элементам интерфейса.
 */
export const Tag = ({ presetSize = 'small', presetStyle = 'tag', ...props }: IProps) => {
    const cn = useClassnames(style, props.className);

    return (
        <span
            id={props.id}
            onClick={props.onClick}
            onDrag={props.onDrag}
            onMouseEnter={props.onMouseEnter}
            onMouseLeave={props.onMouseLeave}
            children={props.children}
            className={cn('tag', {
                [`tag_style-${presetStyle}`]: presetStyle,
                [`tag_size-${presetSize}`]  : presetSize,
                'tag_interactive'           : !!props.onClick
            })}
        />
    );
};
