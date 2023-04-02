import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCalculator = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M18 1H6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM6 7V3h12v4H6Zm0 2v12h12V9H6Zm4 10H8v-2h2v2Zm1 0h2v-2h-2v2Zm5 0h-2v-5h2v5Zm-8-3h2v-2H8v2Zm5 0h-2v-2h2v2Zm-3-3H8v-2h2v2Zm1 0h2v-2h-2v2Zm5 0h-2v-2h2v2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCalculator;
