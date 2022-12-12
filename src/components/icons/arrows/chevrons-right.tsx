import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsChevronsRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M7.707 5.293 6.293 6.707 11.586 12l-5.293 5.293 1.414 1.414L14.414 12 7.707 5.293Zm5 0-1.414 1.414L16.586 12l-5.293 5.293 1.414 1.414L19.414 12l-6.707-6.707Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsChevronsRight;
