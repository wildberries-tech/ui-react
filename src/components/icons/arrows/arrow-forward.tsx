import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowForward = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m18.586 10-4.293-4.293 1.414-1.414L22.414 11l-6.707 6.707-1.414-1.414L18.586 12H13c-6.746 0-9 2.344-9 9H2c0-7.744 3.131-11 11-11h5.586Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowForward;
