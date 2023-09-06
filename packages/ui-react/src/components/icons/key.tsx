import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconKey = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8 9a7 7 0 1 1 7 7h-2v2h-2v2H9v2H2v-5.414l6.148-6.148A7.025 7.025 0 0 1 8 9Zm3 7v-2h4a5 5 0 1 0-4.786-3.547l.174.573L4 17.414V20h3v-2h2v-2h2Zm2-7a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconKey;
