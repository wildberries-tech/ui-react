import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconDownload = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M16.293 9.293 13 12.586V2h-2v10.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707-1.414-1.414ZM22 20v-4h-2v4H4v-4H2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconDownload;
