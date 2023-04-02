import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAlarmPlus = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6.207 2.707 4.793 1.293l-3.5 3.5 1.414 1.414 3.5-3.5Zm13-1.414 3.5 3.5-1.414 1.414-3.5-3.5 1.414-1.414ZM2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12Zm18 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-9 1H8v-2h3V8h2v3h3v2h-3v3h-2v-3Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconAlarmPlus;
