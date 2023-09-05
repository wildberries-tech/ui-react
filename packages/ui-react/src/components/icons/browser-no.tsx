import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconBrowserNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m12 15.414-2.293 2.293-1.414-1.414L10.586 14l-2.293-2.293 1.414-1.414L12 12.586l2.293-2.293 1.414 1.414L13.414 14l2.293 2.293-1.414 1.414L12 15.414ZM21 9H3v10h18V9Zm0-2V5H3v2h18ZM3 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBrowserNo;
