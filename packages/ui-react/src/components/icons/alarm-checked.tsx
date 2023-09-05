import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconAlarmChecked = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m4.793 1.293 1.414 1.414-3.5 3.5-1.414-1.414 3.5-3.5Zm17.914 3.5-3.5-3.5-1.414 1.414 3.5 3.5 1.414-1.414ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.293-11.707L11 12.586l-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconAlarmChecked;
