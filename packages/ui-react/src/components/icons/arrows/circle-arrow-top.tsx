import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleArrowTop = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-4v-6.586l2.293 2.293 1.414-1.414L12 6.586l-4.707 4.707 1.414 1.414L11 10.414V17h2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleArrowTop;
