import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconMapsMapPinLocation = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="M13 11.9V19h-2v-7.1A5.002 5.002 0 0 1 12 2a5 5 0 0 1 1 9.9Zm-4 2.257v2.027C6.067 16.55 4 17.387 4 18c0 .807 3.58 2 8 2s8-1.193 8-2c0-.613-2.067-1.45-5-1.816v-2.027c4.056.445 7 1.81 7 3.843 0 2.507-4.48 4-10 4S2 20.507 2 18c0-2.032 2.944-3.398 7-3.843ZM15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconMapsMapPinLocation;
