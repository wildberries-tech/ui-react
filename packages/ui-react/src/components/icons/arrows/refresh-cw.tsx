import React from 'react';

import { SVG, IProps as IPropsSVG } from '..';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconArrowsRefreshCw = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 4c2.394 0 4.447 1.079 5.807 3H14v2h7V2h-2v3.27C17.275 3.183 14.804 2 12 2 6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8Zm0 16c-2.394 0-4.446-1.079-5.807-3H10v-2H3v7h2v-3.27C6.725 20.817 9.196 22 12 22c5.523 0 10-4.477 10-10h-2a8 8 0 0 1-8 8Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconArrowsRefreshCw;
