import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleChevronsTop = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM8.707 16.707l-1.414-1.414L12 10.586l4.707 4.707-1.414 1.414L12 13.414l-3.293 3.293ZM12 6.586l-4.707 4.707 1.414 1.414L12 9.414l3.293 3.293 1.414-1.414L12 6.586Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsCircleChevronsTop;
