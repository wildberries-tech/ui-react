import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCirclePlus = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm5-10h-4V7h-2v4H7v2h4v4h2v-4h4v-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCirclePlus;
