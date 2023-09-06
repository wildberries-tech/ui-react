import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconScan = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16 2h4.182C21.186 2 22 2.895 22 4v4h-2V4h-4V2ZM2 13v-2h20v2H2Zm14 9v-2h4v-4h2v4c0 1.105-.814 2-1.818 2H16ZM3.818 22H8v-2H4v-4H2v4c0 1.105.814 2 1.818 2ZM8 4V2H3.818C2.814 2 2 2.895 2 4v4h2V4h4Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconScan;
