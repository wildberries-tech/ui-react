import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsChevronsLeft = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m11.293 18.707 1.414-1.414L7.414 12l5.293-5.293-1.414-1.414L4.586 12l6.707 6.707Zm6.414-1.414L12.414 12l5.293-5.293-1.414-1.414L9.586 12l6.707 6.707 1.414-1.414Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsChevronsLeft;
