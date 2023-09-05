import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMapsRadar = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m18.364 5.636 1.414-1.414A10.966 10.966 0 0 1 23 12c0 6.075-4.925 11-11 11S1 18.075 1 12C1 6.262 5.394 1.55 11 1.045V1h2v10l1.121-1.121A3 3 0 1 1 11 9.17V7.1a5.002 5.002 0 0 0 1 9.9 5 5 0 0 0 3.536-8.536L16.95 7.05A7 7 0 1 1 11 5.07V3.056A9.001 9.001 0 0 0 12 21a9 9 0 0 0 6.364-15.364Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsRadar;
