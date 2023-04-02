import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconTimer = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M13 7V3.055A9.001 9.001 0 0 1 12 21a9 9 0 0 1-9-9c0-2.426.963-4.697 2.648-6.376L4.236 4.207A10.967 10.967 0 0 0 1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1h-1v6h2Zm-1 3c-.18 0-.353.024-.518.068L7.707 6.293 6.293 7.707l3.775 3.775A2 2 0 1 0 12 10Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconTimer;
