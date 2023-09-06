import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsCircleChevronsLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9.707 4.707L6.586 12l4.707-4.707 1.414 1.414L9.414 12l3.293 3.293-1.414 1.414Zm4 0 1.414-1.414L13.414 12l3.293-3.293-1.414-1.414L10.586 12l4.707 4.707Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleChevronsLeft;
