import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconToggleRight = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M17 5H7a7 7 0 0 0 0 14h10a7 7 0 1 0 0-14ZM2 12a5 5 0 0 1 5-5h10a5 5 0 0 1 0 10H7a5 5 0 0 1-5-5Zm15 4a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconToggleRight;
