import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBookmarks = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M10 1c-1.093 0-1.982.892-2 2h11v14.916l2 1.016V3.034C21 1.91 20.105 1 19 1h-9Zm0 18.118-7 3.5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v15.618l-7-3.5Zm-5 .264 5-2.5 5 2.5V7H5v12.382Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconBookmarks;
