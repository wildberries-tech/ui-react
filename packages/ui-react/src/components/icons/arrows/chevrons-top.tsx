import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsChevronsTop = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m5.293 11.293 1.414 1.414L12 7.414l5.293 5.293 1.414-1.414L12 4.586l-6.707 6.707Zm1.414 6.414L12 12.414l5.293 5.293 1.414-1.414L12 9.586l-6.707 6.707 1.414 1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsChevronsTop;
