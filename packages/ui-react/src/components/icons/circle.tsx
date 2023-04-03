import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCircle = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCircle;
