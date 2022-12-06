import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconBookmark = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m5 22.618 7-3.5 7 3.5V4a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v18.618Zm7-5.736-5 2.5V4h10v15.382l-5-2.5Z" clipRule="evenodd" />
    </SVG>
);

export default IconBookmark;
