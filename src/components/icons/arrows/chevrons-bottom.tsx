import React from 'react';

import { SVG, IProps as IPropsSVG } from '../index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsChevronsBottom = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M17.293 5.293 12 10.586 6.707 5.293 5.293 6.707 12 13.414l6.707-6.707-1.414-1.414Zm1.414 6.414-1.414-1.414L12 15.586l-5.293-5.293-1.414 1.414L12 18.414l6.707-6.707Z" clipRule="evenodd" />
    </SVG>
);

export default IconArrowsChevronsBottom;
