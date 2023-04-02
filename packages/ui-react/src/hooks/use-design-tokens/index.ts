import { useMemo } from 'react';

import { TStyle, useClassnames } from '../use-classnames';
import style from '../../native/design-tokens/index.module.pcss';

export interface IOptions {
    /**
     * Параметр `className` используется для добавления пользовательских CSS классов к компоненту. Это позволяет настраивать внешний вид компонента с помощью пользовательских стилей.
     */
    className?: string | TStyle
}

export const useDesignTokens = (options: IOptions = {}) => {
    const cn = useClassnames(style, options.className);

    return useMemo(() => {
        return {
            className: cn('design-tokens')
        };
    }, [options.className]);
};
