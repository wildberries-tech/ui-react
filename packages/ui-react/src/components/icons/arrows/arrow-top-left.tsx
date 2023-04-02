import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowTopLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m6.414 5 13.293 13.293-1.414 1.414L5 6.414V14H3V3h11v2H6.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowTopLeft;
