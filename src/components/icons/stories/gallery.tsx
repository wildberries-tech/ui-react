import React from 'react';
import { IconGallery, IconItem } from '@storybook/addon-docs';

const context = require.context('./../', false, /^\.\/(?!index|_).*\.tsx$/);

export default () => {
    return (
        // @ts-ignore
        <IconGallery>
            {context.keys().map((key, index) => {
                // eslint-disable-next-line @typescript-eslint/naming-convention
                const Component = context(key).default;

                return (
                    // @ts-ignore
                    <IconItem key={index} name={Component.name}>
                        <Component />
                    </IconItem>
                );
            })}
        </IconGallery>
    );
};
