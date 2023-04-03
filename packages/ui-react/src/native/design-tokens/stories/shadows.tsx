import React from 'react';
import { Unstyled } from '@storybook/blocks';

import { useClassnames } from '../../../hooks/use-classnames';
import source from '../index.module.pcss?raw';

import style from './shadow.module.pcss';

const SHADOW_LINES = source.match(/(--box-shadow-*.+): (.*);$/gm);
const SHADOWS = SHADOW_LINES?.map((item) => {
    // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
    const [, name, value] = item.match(/^(--box-shadow-*.+): (.*);$/) ?? [];

    return {
        name,
        value
    };
});

export const Shadows = () => {
    const cn = useClassnames(style);

    return (
        <Unstyled>
            <div className={cn('shadows')}>
                {SHADOWS?.map((item, index) => (
                    <div
                        key={index}
                        className={cn('shadows__item')}
                        style={{
                            boxShadow: item.value
                        }}
                    >
                        {item.name.replace('--box-shadow-', '').replace(/-/g, ' ')}
                        <ul className={cn('shadows__access-list')}>
                            <li className={cn('shadows__access-item')}>
                                CSS:
                                <code
                                    className={cn('shadows__code')}
                                    children={item.name}
                                />
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </Unstyled>
    );
};
