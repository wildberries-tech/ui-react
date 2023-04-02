import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconLockNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M2.414 1.293 1 2.707l6 6V10H6c-1.068 0-2 .776-2 1.833v8.334C4 21.224 4.932 22 6 22h12c.63 0 1.213-.27 1.584-.708L21 22.707l1.414-1.414-20-20ZM18 19.707 10.293 12H6v8h12v-.293Zm0-5.628 2 2v-4.246C20 10.776 19.068 10 18 10h-1V7a5 5 0 0 0-9.034-2.955L9.41 5.487A3 3 0 0 1 15 7v3h-1.079l2 2H18v2.079ZM12 17a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconLockNo;
