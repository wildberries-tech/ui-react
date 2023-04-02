import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMail = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 6.618V19h18V9.619l-9 4.5-9-4.5Zm0-2.236 9 4.5 9-4.5V5H3v2.382Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMail;
