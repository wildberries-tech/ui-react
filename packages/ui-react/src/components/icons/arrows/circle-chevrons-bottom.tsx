import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleChevronsBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-5.707-.707 1.414 1.414L12 17.414l-4.707-4.707 1.414-1.414L12 14.586l3.293-3.293Zm0-4L12 10.586 8.707 7.293 7.293 8.707 12 13.414l4.707-4.707-1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleChevronsBottom;
