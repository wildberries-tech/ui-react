import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBrowser = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M21 9H3v10h18V9Zm0-2V5H3v2h18ZM3 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBrowser;
