import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBookmarkAdd = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M17 17v2.382l-5-2.5-5 2.5V4h10v1h2V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18.618l7-3.5 7 3.5V17h-2Zm1-9v2h-2v2h2v2h2v-2h2v-2h-2V8h-2Z" clipRule="evenodd" />
    </SVG>
);

export default IconBookmarkAdd;
