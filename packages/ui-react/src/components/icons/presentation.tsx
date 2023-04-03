import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconPresentation = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M22 4h-1v10a2 2 0 0 1-2 2h-6v1.434l4.515 2.708-1.03 1.716L13 19.766V22h-2v-2.234l-3.486 2.092-1.029-1.716L11 17.434V16H5a2 2 0 0 1-2-2V4H2V2h20v2ZM5 4v10h14V4H5Zm3 8h2V8H8v4Zm5 0h-2V6h2v6Zm1 0h2V9h-2v3Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconPresentation;
