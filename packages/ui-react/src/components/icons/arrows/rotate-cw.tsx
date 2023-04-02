import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsRotateCw = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M17.807 7C16.447 5.079 14.394 4 12 4a8 8 0 1 0 8 8h2c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2c2.804 0 5.275 1.183 7 3.27V2h2v7h-7V7h3.807Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsRotateCw;
