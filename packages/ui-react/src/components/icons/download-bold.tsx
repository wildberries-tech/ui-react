import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconDownloadBold = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M7 7V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v7h5l-10 8.585L2 11h5V7Zm8-3v9h1.297L12 16.95 7.703 13H9V4h6Zm4 18a2 2 0 0 0 2-2H3a2 2 0 0 0 2 2h14Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconDownloadBold;
