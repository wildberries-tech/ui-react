import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsArrowTopRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M19 6.414 5.707 19.707l-1.414-1.414L17.586 5H10V3h11v11h-2V6.414Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsArrowTopRight;
