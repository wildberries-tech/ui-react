import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsPin = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m12 23.328.658-.575C18.188 17.923 21 13.707 21 10c0-5.25-4.097-9-9-9s-9 3.75-9 9c0 3.707 2.811 7.924 8.342 12.753l.658.575Zm0-2.665C7.307 16.433 5 12.85 5 10c0-4.103 3.164-7 7-7s7 2.897 7 7c0 2.85-2.307 6.433-7 10.663ZM12 5a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconMapsPin;
