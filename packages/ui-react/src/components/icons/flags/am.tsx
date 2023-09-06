import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconFlagsAM = (props: IProps) => (
    <SVG
        {...props.svg}
        viewBox="0 0 640 480"
    >
        <path
            fill="#d90012"
            d="M0 0h640v160H0z"
        />
        <path
            fill="#0033a0"
            d="M0 160h640v160H0z"
        />
        <path
            fill="#f2a800"
            d="M0 320h640v160H0z"
        />
    </SVG>
);

export default IconFlagsAM;
