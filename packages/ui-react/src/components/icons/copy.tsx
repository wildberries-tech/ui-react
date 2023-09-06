import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconCopy = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10 2h10c1.152 0 2 .848 2 2v10c0 1.152-.848 2-2 2h-4v4c0 1.152-.848 2-2 2H4c-1.152 0-2-.848-2-2V10c0-1.152.848-2 2-2h4V4c0-1.152.848-2 2-2Zm-2 8H4v10h10v-4h-4c-1.152 0-2-.848-2-2v-4Zm2-6v10h10V4H10Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCopy;
