import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m6.414 13 6.293 6.293-1.414 1.414L2.586 12l8.707-8.707 1.414 1.414L6.414 11H21v2H6.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowLeft;
