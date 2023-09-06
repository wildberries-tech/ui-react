import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconStarNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6.851 8.266 1.293 2.707l1.414-1.414 20 20-1.414 1.414-2.563-2.563.476 2.774L12 19.13l-7.206 3.788 1.376-8.024L.34 9.212l6.511-.946Zm9.43 9.43.269 1.566L12 16.87l-4.55 2.392.87-5.066-3.682-3.588 3.978-.578 7.665 7.665Zm3.08-7.088-2.298 2.24 1.414 1.415 5.182-5.051-8.056-1.171L12 .74 9.672 5.457l1.493 1.493L12 5.26l2.275 4.609 5.086.74Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconStarNo;
