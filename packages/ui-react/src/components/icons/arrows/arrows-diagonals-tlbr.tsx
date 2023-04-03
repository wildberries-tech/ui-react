import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowsDiagonalsTlbr = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6.414 5 19 17.586V14h2v7h-7v-2h3.586L5 6.414V10H3V3h7v2H6.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowsDiagonalsTlbr;
