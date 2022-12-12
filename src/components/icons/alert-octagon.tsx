import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconAlertOctagon = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M23 16.556V7.444L16.556 1H7.444L1 7.444v9.112L7.444 23h9.112L23 16.556ZM8.272 3h7.456L21 8.272v7.456L15.728 21H8.272L3 15.728V8.272L8.272 3ZM12 17.998a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm1.004-12h-2.001v8h2v-8Z" clipRule="evenodd" />
    </SVG>
);

export default IconAlertOctagon;
