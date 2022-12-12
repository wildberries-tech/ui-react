import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAlertCircle = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12Zm20 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.004-12h-2.001v8h2v-8Z" clipRule="evenodd" />
    </SVG>
);

export default IconAlertCircle;
