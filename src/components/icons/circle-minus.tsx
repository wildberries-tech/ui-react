import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCircleMinus = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM7 11v2h10v-2H7Z" clipRule="evenodd" />
    </SVG>
);

export default IconCircleMinus;
