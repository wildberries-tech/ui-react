import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCheckInCircle = (props: IProps) => (
    <SVG {...props.svg}>
        <circle
            cx="12"
            cy="12"
            r="12"
            fill="#067B00"
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.56309 15.1999L18.6215 6L20 7.40006L9.56309 18L4 12.35L5.37853 10.95L9.56309 15.1999Z"
            fill="white"
        />
    </SVG>
);

export default IconCheckInCircle;
