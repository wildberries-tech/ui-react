import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowsDiagonals = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M13.414 12 19 17.586V14h2v7h-7v-2h3.586L12 13.414 6.414 19H10v2H3v-7h2v3.586L10.586 12 5 6.414V10H3V3h7v2H6.414L12 10.586 17.586 5H14V3h7v7h-2V6.414L13.414 12Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowsDiagonals;
