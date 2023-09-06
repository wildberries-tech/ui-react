import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconFlagsRU = (props: IProps) => (
    <SVG
        {...props.svg}
        viewBox="0 0 640 480"
    >
        <g
            fillRule="evenodd"
            strokeWidth="1pt"
        >
            <path
                fill="#fff"
                d="M0 0h640v480H0z"
            />
            <path
                fill="#0039a6"
                d="M0 160h640v320H0z"
            />
            <path
                fill="#d52b1e"
                d="M0 320h640v160H0z"
            />
        </g>
    </SVG>
);

export default IconFlagsRU;
