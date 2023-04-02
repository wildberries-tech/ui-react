import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconFlag = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M7 23H4v-2h1V1h2v1h14.125l-2.999 6 3 6H7v7h1v2H7Zm0-11V4h10.89l-2 4 2 4H7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconFlag;
