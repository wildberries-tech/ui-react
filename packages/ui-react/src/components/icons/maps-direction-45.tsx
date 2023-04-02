import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsDirection45 = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M21 3 1 11.571l8.235 3.194L12.43 23 21 3Zm-8.479 14.707-1.74-4.488-4.488-1.74 10.9-4.671-4.672 10.899Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsDirection45;
