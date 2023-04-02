import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconConnectionCast = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1 9h2V5h18v14h-8v2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v4Zm10 12H9a8 8 0 0 0-8-8v-2c5.523 0 10 4.477 10 10Zm-6 0h2a6 6 0 0 0-6-6v2a4 4 0 0 1 4 4Zm-4-2v2h2a2 2 0 0 0-2-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconConnectionCast;
