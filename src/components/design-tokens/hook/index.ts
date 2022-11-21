import { useMemo } from 'react';

import { IStyle, useClassnames } from '../../../hooks/use-classnames';

import style from './index.module.pcss';

export interface IOptions {
    className?: string | IStyle
}

export const useDesignTokens = (options: IOptions) => {
    const cn = useClassnames<typeof style>(style, options.className);

    return useMemo(() => {
        return {
            className: cn('design-tokens')
        };
    }, [options.className]);
}
