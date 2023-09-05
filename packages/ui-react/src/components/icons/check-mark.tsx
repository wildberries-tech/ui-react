import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCheckMark = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M9.563 15.2 18.622 6 20 7.4 9.563 18 4 12.35l1.379-1.4 4.184 4.25Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCheckMark;
