import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconOptions = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M13 11a4.002 4.002 0 0 1-3.874-3H2V6h7.126A4.002 4.002 0 0 1 17 7a4 4 0 0 1-4 4Zm6-5h3v2h-3V6ZM8 21a4.002 4.002 0 0 1-3.874-3H2v-2h2.126A4.002 4.002 0 0 1 12 17a4 4 0 0 1-4 4Zm6-3h8v-2h-8v2Zm-4-1a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm5-10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconOptions;
