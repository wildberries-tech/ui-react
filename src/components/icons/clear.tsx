import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconClear = (props: IProps) => (
    <SVG {...props.svg}>
        <path d="M19.778 18.364 13.414 12l6.364-6.364-1.414-1.414L12 10.586 5.636 4.222 4.222 5.636 10.586 12l-6.364 6.364 1.414 1.414L12 13.414l6.364 6.364 1.414-1.414Z" />
    </SVG>
);

export default IconClear;
