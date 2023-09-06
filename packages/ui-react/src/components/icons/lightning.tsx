import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconLightning = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3.92 15H9v7.85L20.08 9H15V1.15L3.92 15ZM11 13H8.08L13 6.85V11h2.92L11 17.15V13Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconLightning;
