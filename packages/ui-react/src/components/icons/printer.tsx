import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconPrinter = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M4 7h2V2h12v5h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2v3H6v-3H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Zm12 0H8V4h8v3Zm4 2v8h-2v-2H6v2H4V9h16Zm-4 8H8v3h8v-3Zm3-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconPrinter;
