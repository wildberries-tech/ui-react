import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsCursor = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m18.15 11.376-5.209 1.789 3.66 4.525-1.653 1.248-3.66-4.525-3.056 4.45L4.15 3.939l14 7.438Zm-6.73 6.38L7.44 23.55 1 0l22.157 11.771-6.864 2.357 3.163 3.913-4.847 3.66-3.19-3.946Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsCursor;
