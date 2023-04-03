import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMinimize = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M21 10V8h-3.586l4.293-4.293-1.414-1.414L16 6.586V3h-2v7h7ZM7 7v5H5V5h7v2H7Zm10 5v5h-5v2h7v-7h-2ZM3.707 21.707 8 17.414V21h2v-7H3v2h3.586l-4.293 4.293 1.414 1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMinimize;
