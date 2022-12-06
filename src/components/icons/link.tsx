import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconLink = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M10 15v2H6A5 5 0 0 1 6 7h4v2H6a3 3 0 1 0 0 6h4Zm4-6V7h4a5 5 0 0 1 0 10h-4v-2h4a3 3 0 1 0 0-6h-4Zm3 2H7v2h10v-2Z" clipRule="evenodd" />
    </SVG>
);

export default IconLink;
