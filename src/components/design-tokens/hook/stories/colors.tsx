import React from 'react';
import { Source } from '@storybook/addon-docs';

// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import source from '!../index.module.pcss?raw';

import style from './index.module.pcss';

const COLOR_LINES = source.match(/(--color-*.+): (.*);$/gm);
const COLORS = COLOR_LINES?.map((item) => {
    const [, name, value] = item.match(/^(--color-*.+): (.*);$/) || [];

    return {
        name,
        value
    };
});

export const Colors = () => {
    return (
        <ul className={style['story-colors']}>
            {COLORS?.map((item, index) => (
                <li
                    key={index}
                    className={style['story-colors__item']}
                >
                    <input
                        className={style['story-colors__item-color']}
                        name={item.name}
                        type="color"
                        disabled={true}
                        value={item.value}
                    />
                    <div className={style['story-colors__content']}>
                        <h1
                            className={style['story-colors__header-item']}
                            children={item.name.replace('--color-', '').replace(/-/g, ' ')}
                        />
                        <ul className={style['story-colors__access-list']}>
                            <li className={style['story-colors__access-item']}>
                                CSS:
                                <code
                                    className={style['story-colors__code']}
                                    children={item.name}
                                />
                            </li>
                        </ul>

                    </div>
                </li>
            ))}
        </ul>
    );
};
