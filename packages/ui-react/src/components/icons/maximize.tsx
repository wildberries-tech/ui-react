import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMaximize = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M4 4v8H2V2h10v2H4Zm11.707 5.707L20 5.414V9h2V2h-7v2h3.586l-4.293 4.293 1.414 1.414ZM20 12v8h-8v2h10V12h-2ZM9 22v-2H5.414l4.293-4.293-1.414-1.414L4 18.586V15H2v7h7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMaximize;
