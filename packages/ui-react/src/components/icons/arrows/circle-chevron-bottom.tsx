import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsCircleChevronBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm4.707-10.293-1.414-1.414L12 12.586 8.707 9.293l-1.414 1.414L12 15.414l4.707-4.707Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleChevronBottom;
