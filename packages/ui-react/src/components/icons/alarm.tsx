import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAlarm = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M6.207 2.707 4.793 1.293l-3.5 3.5 1.414 1.414 3.5-3.5Zm13-1.414 3.5 3.5-1.414 1.414-3.5-3.5 1.414-1.414ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm5-9h-4V6h-2v7h6v-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconAlarm;
