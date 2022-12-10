import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAlarmMinus = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m4.793 1.293 1.414 1.414-3.5 3.5-1.414-1.414 3.5-3.5Zm17.914 3.5-3.5-3.5-1.414 1.414 3.5 3.5 1.414-1.414ZM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-4-9v2h8v-2H8Z" clipRule="evenodd" />
    </SVG>
);

export default IconAlarmMinus;
