import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowUndo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M4 11.366c.5-.654 1.15-1.492 1.57-1.953C7.535 7.258 9.762 6 12.5 6c6.39 0 9.5 4.412 9.5 10h-2c0-4.603-2.395-8-7.5-8-2.091 0-3.832.983-5.45 2.76-.424.464-1.23 1.522-1.782 2.24H11v2H2V6h2v5.366Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowUndo;
