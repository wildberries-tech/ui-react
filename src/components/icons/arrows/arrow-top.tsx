import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowTop = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M13 5.414V22h-2V5.414l-6.293 6.293-1.414-1.414L12 1.586l8.707 8.707-1.414 1.414L13 5.414Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowTop;
