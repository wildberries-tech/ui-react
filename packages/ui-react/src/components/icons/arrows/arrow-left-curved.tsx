import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsArrowLeftCurved = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M5.414 10H16a6 6 0 0 1 0 12h-2.5v-2H16a4 4 0 1 0 0-8H5.414l4.293 4.293-1.414 1.414L1.586 11l6.707-6.707 1.414 1.414L5.414 10Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsArrowLeftCurved;
