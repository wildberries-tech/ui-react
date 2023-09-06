import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMoreHorizontal = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm5-2a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMoreHorizontal;
