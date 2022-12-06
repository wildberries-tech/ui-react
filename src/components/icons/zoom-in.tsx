import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconZoomIn = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M2 10a8 8 0 0 0 12.906 6.32l5.387 5.387 1.414-1.414-5.387-5.387A8 8 0 1 0 2 10Zm8 6a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM9 6v3H6v2h3v3h2v-3h3V9h-3V6H9Z" clipRule="evenodd" />
    </SVG>
);

export default IconZoomIn;
