import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleChevronRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM10.707 7.293 9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleChevronRight;
