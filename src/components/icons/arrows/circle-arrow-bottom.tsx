import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCircleArrowBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM11 7v6.586l-2.293-2.293-1.414 1.414L12 17.414l4.707-4.707-1.414-1.414L13 13.586V7h-2Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsCircleArrowBottom;
