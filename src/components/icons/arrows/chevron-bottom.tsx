import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsChevronBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m19.293 7.293 1.414 1.414L12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsChevronBottom;
