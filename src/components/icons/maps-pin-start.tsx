import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsPinStart = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m12.658 22.753-.658.575-.658-.575C5.812 17.923 3 13.707 3 10c0-5.25 4.097-9 9-9s9 3.75 9 9c0 3.707-2.811 7.924-8.342 12.753ZM5 10c0 2.85 2.307 6.433 7 10.663 4.693-4.23 7-7.814 7-10.663 0-4.103-3.164-7-7-7s-7 2.897-7 7Zm2 1h6.586l-2.293 2.293 1.414 1.414L17.414 10l-4.707-4.707-1.414 1.414L13.586 9H7v2Z" clipRule="evenodd" />
    </SVG>
);

export default IconMapsPinStart;
