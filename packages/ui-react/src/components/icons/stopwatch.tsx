import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconStopwatch = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M11 4.055V3h-1V1h4v2h-1v1.055a8.957 8.957 0 0 1 4.617 1.912l1.674-1.681 1.418 1.41-1.678 1.686A9 9 0 1 1 3 13c0-4.633 3.5-8.448 8-8.945ZM12 20a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm1-6V8h-2v6h2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconStopwatch;
