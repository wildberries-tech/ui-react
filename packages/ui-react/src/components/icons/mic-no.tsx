import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMicNo = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M8 9.414 1.293 2.707l1.414-1.414 20 20-1.414 1.414-4.387-4.387A7.96 7.96 0 0 1 13 19.938V21h3v2H8v-2h3v-1.062A8.001 8.001 0 0 1 4 12v-2h2v2a6 6 0 0 0 9.477 4.89l-1.445-1.444A4 4 0 0 1 8 12V9.414Zm4.518 4.518A2 2 0 0 1 10 12v-.586l2.518 2.518ZM14 5v4.786l2 2V5a4 4 0 0 0-7.855-1.07L10 5.786V5a2 2 0 1 1 4 0Zm5.358 10.144-1.567-1.568c.136-.502.21-1.03.21-1.576v-2h2v2c0 1.116-.23 2.18-.643 3.144Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMicNo;
