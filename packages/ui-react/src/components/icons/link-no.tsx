import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconLinkNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M1.293 2.707 5.6 7.016A5 5 0 0 0 6 17h4v-2H6a3 3 0 0 1 0-6h1.586l2 2H7v2h4.586l9.707 9.707 1.414-1.414-20-20-1.414 1.414Zm17.739 12.11 1.497 1.497A5 5 0 0 0 18 7h-4v2h4a3 3 0 0 1 1.032 5.818Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconLinkNo;
