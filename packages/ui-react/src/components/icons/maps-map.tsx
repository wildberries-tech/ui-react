import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsMap = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m2 19.72 7.108 2.37 6.969-3.982L22 20.477V4.323l-6.077-2.43-7.03 4.017L2 3.612v16.109Zm12-2.729-4 2.286V7.58l4-2.285V16.99Zm2-1.068 4 1.6V5.677l-3.923-1.57-.077.045v11.77ZM4 18.279l4 1.334V7.72L4 6.387V18.28Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsMap;
