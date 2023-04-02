import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsRefreshCcw = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10 7H6.193C7.553 5.079 9.606 4 12 4a8 8 0 0 1 8 8h2c0-5.523-4.477-10-10-10-2.804 0-5.275 1.183-7 3.27V2H3v7h7V7Zm4 10h3.807c-1.36 1.921-3.413 3-5.807 3a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10 2.804 0 5.275-1.183 7-3.27V22h2v-7h-7v2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsRefreshCcw;
