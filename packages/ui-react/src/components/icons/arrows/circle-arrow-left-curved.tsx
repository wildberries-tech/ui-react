import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsCircleArrowLeftCurved = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-.293-7.707L9.414 11H14a2 2 0 1 1 0 4v2a4 4 0 0 0 0-8H9.414l2.293-2.293-1.414-1.414L5.586 10l4.707 4.707 1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCircleArrowLeftCurved;
