import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBoldBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M21.204 12H15.82l-2-10h-3.64l-2 10H2.796L12 22.519 21.204 12Zm-4.408 2L12 19.481 7.204 14H9.82l2-10h.36l2 10h2.616Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBoldBottom;
