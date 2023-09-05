import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowRightCurved = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m18.586 10-4.293-4.293 1.414-1.414L22.414 11l-6.707 6.707-1.414-1.414L18.586 12H8a4 4 0 1 0 0 8h2.5v2H8a6 6 0 0 1 0-12h10.586Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowRightCurved;
