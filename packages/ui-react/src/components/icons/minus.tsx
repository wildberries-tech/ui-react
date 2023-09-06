import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMinus = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22 11v2H2v-2h20Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMinus;
