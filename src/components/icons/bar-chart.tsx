import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBarChart = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M3 3h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 2v14h18V5H3Zm4 12h2v-6H7v6Zm6 0h-2V7h2v10Zm2 0h2v-7h-2v7Z" clipRule="evenodd" />
    </SVG>
);

export default IconBarChart;
