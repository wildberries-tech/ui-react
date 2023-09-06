import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconMapsPinQuestion = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="m12 23.328.658-.575C18.188 17.923 21 13.707 21 10c0-5.25-4.097-9-9-9s-9 3.75-9 9c0 3.707 2.811 7.924 8.342 12.753l.658.575Zm0-2.665C7.307 16.433 5 12.85 5 10c0-4.103 3.164-7 7-7s7 2.897 7 7c0 2.85-2.307 6.433-7 10.663ZM13 13h-2c0-1.702.625-2.43 2.053-3.144.822-.411.947-.558.947-1.356 0-.944-.723-1.5-2-1.5a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4c2.284 0 4 1.32 4 3.5 0 1.702-.625 2.43-2.053 3.144-.822.411-.947.558-.947 1.356Zm0 1.998a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconMapsPinQuestion;
