import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleChevronsRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9.707-3.293 1.414-1.414L17.414 12l-4.707 4.707-1.414-1.414L14.586 12l-3.293-3.293ZM8.707 7.293 7.293 8.707 10.586 12l-3.293 3.293 1.414 1.414L13.414 12 8.707 7.293Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleChevronsRight;
