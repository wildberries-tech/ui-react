import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMapsCompas = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm2.79-6.21 2.791-8.371-8.372 2.79-2.79 8.372 8.372-2.79Zm-1.58-1.58L9.58 14.418l1.21-3.628 3.628-1.21-1.21 3.628Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsCompas;
