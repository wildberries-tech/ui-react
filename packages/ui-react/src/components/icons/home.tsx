import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconHome = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m5.889 10 6.001-6.001L17.891 10v10h-12V10h-.002ZM3.89 11.998l-1.477 1.478L1 12.062l9.477-9.477c.78-.78 2.046-.78 2.826 0l9.477 9.477-1.413 1.414-1.477-1.477V20a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2v-8.002Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconHome;
