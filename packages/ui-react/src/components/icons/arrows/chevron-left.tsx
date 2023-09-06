import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsChevronLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m9.414 12 7.293 7.293-1.414 1.414L6.586 12l8.707-8.707 1.414 1.414L9.414 12Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsChevronLeft;
