import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    svg?: IPropsSVG
}

export const IconArrowsRefreshCwAlert = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 4c2.394 0 4.447 1.079 5.807 3H16v2h5V4h-2v1.27C17.275 3.183 14.804 2 12 2 6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8Zm0 16c-2.394 0-4.446-1.079-5.807-3H8v-2H3v5h2v-1.27C6.725 20.817 9.196 22 12 22c5.523 0 10-4.477 10-10h-2a8 8 0 0 1-8 8Zm0-4.002a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.004-9h-2.001v6h2v-6Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsRefreshCwAlert;
