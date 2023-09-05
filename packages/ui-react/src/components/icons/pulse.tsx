import React from 'react';

import { SVG, IProps as IPropsSVG } from '.';

export interface IProps {
    readonly svg?: IPropsSVG
}

export const IconPulse = (props: IProps) => (
    <SVG {...props.svg}>
        <path
            fillRule="evenodd"
            d="M3.818 2h16.364C21.186 2 22 2.995 22 4.222V19.778C22 21.005 21.186 22 20.182 22H3.818C2.814 22 2 21.005 2 19.778V4.222C2 2.995 2.814 2 3.818 2ZM20 11V4H4v7h3.414l2.249 2.248 3.1-7.232L16.5 11H20ZM4 13h2.586l3.751 3.752 2.9-6.768L15.5 13H20v7H4v-7Z"
            clipRule="evenodd"
        />
    </SVG>
);

export default IconPulse;
