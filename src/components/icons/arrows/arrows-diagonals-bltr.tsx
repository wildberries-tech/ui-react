import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowsDiagonalsBltr = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M14 5V3h7v7h-2V6.414L6.414 19H10v2H3v-7h2v3.586L17.586 5H14Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowsDiagonalsBltr;
