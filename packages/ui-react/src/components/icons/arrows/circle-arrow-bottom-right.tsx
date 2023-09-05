import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsCircleArrowBottomRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2-12v3.586L8.707 7.293 7.293 8.707 12.586 14H9v2h7V9h-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleArrowBottomRight;
