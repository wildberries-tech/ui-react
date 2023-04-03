import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsDirection = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m12 1.374-8.857 21.51L12 19.088l8.857 3.796L12 1.374Zm5.143 17.742L12 16.912l-5.143 2.204L12 6.626l5.143 12.49Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsDirection;
