import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowReply = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M5.414 10H11c7.869 0 11 3.256 11 11h-2c0-6.656-2.253-9-9-9H5.414l4.293 4.293-1.414 1.414L1.586 11l6.707-6.707 1.414 1.414L5.414 10Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowReply;
