import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsRotateCcw = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M6.193 7H10v2H3V2h2v3.27C6.725 3.183 9.196 2 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12h2a8 8 0 1 0 8-8C9.606 4 7.554 5.079 6.193 7Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsRotateCcw;
