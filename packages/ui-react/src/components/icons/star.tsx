import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconStar = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m6.17 14.894-1.376 8.024L12 19.13l7.206 3.788-1.376-8.024 5.83-5.682-8.057-1.171L12 .74l-3.603 7.3L.34 9.21l5.83 5.683Zm9.51-.698.87 5.066L12 16.87l-4.55 2.392.87-5.066-3.682-3.588 5.087-.74L12 5.261l2.275 4.609 5.086.74-3.68 3.587Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconStar;
