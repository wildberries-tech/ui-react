import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsChevronTop = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m12 9.414-7.293 7.293-1.414-1.414L12 6.586l8.707 8.707-1.414 1.414L12 9.414Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsChevronTop;
