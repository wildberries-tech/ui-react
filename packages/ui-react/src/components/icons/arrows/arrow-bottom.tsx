import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M11 18.586V3h2v15.586l6.293-6.293 1.414 1.414L12 22.414l-8.707-8.707 1.414-1.414L11 18.586Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowBottom;
