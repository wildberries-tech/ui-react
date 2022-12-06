import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconExternalLink = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m11.704 13.707 7.293-7.293V11h2V3h-8v2h4.586l-7.293 7.293 1.414 1.414ZM19 19v-5h-2v5H5V7h5V5H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2Z" clipRule="evenodd" />
    </SVG>
);

export default IconExternalLink;
