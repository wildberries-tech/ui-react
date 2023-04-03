import React from 'react';
import { Unstyled } from '@storybook/blocks';

import { useClassnames } from '../../../hooks/use-classnames';
import source from '../index.module.pcss?raw';

import style from './colors.module.pcss';

const COLOR_LINES = source.match(/(--color-*.+): (.*);$/gm);
const COLORS = COLOR_LINES?.map((item) => {
    const [, name, value] = /^(--color-*.+): (.*);$/.exec(item) ?? [];

    return {
        name,
        value
    };
});

export const Colors = () => {
    const cn = useClassnames(style);

    return (
        <Unstyled>
            <ul className={cn('colors')}>
                {COLORS?.map((item, index) => (
                    <li
                        key={index}
                        className={cn('colors__item')}
                    >
                        <input
                            className={cn('colors__item-color')}
                            name={item.name}
                            type="color"
                            disabled={true}
                            value={item.value}
                        />
                        <div className={cn('colors__content')}>
                            <h1
                                className={cn('colors__header-item')}
                                children={item.name.replace('--color-', '').replace(/-/g, ' ')}
                            />
                            <ul className={cn('colors__access-list')}>
                                <li className={cn('colors__access-item')}>
                                    CSS:
                                    <code
                                        className={cn('colors__code')}
                                        children={item.name}
                                    />
                                </li>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </Unstyled>
    );
};
