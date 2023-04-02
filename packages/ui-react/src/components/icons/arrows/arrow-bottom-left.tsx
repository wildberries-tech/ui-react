import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBottomLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M14 19v2H3V10h2v7.586L18.293 4.293l1.414 1.414L6.414 19H14Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBottomLeft;
