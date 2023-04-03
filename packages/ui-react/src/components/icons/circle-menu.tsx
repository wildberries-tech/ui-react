import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconCircleMenu = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-5-5v-2h10v2H7Zm0-8v2h10V8H7Zm0 3v2h10v-2H7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconCircleMenu;
