import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsCircleChevronLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm.293-4.293 1.414-1.414L10.414 12l3.293-3.293-1.414-1.414L7.586 12l4.707 4.707Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleChevronLeft;
